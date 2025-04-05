import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Opportunity, OpportunityFilters } from "../../../types/Opportunity";
import opportunityService from "../../../services/opportunityService";

interface OpportunitiesState {
  items: Opportunity[];
  followedItems: Opportunity[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filters: OpportunityFilters;
}

const initialState: OpportunitiesState = {
  items: [],
  followedItems: [],
  status: "idle",
  error: null,
  filters: {},
};

export const fetchOpportunities = createAsyncThunk(
  "opportunities/fetchAll",
  async (filters: OpportunityFilters, { rejectWithValue }) => {
    try {
      return await opportunityService.getOpportunities(filters);
    } catch (error) {
      return rejectWithValue("Error al cargar oportunidades");
    }
  }
);

export const fetchFollowedOpportunities = createAsyncThunk(
  "opportunities/fetchFollowed",
  async (filters: OpportunityFilters, { rejectWithValue }) => {
    try {
      return await opportunityService.getFollowedOpportunities(filters);
    } catch (error) {
      return rejectWithValue("Error al cargar oportunidades seguidas");
    }
  }
);

export const toggleFollow = createAsyncThunk(
  "opportunities/toggleFollow",
  async (id: string, { rejectWithValue }) => {
    try {
      const result = await opportunityService.toggleFollowOpportunity(id);
      return { id, followed: result.followed };
    } catch (error) {
      return rejectWithValue("Error al cambiar estado de seguimiento");
    }
  }
);

const opportunitiesSlice = createSlice({
  name: "opportunities",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<OpportunityFilters>) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all opportunities
      .addCase(fetchOpportunities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOpportunities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOpportunities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Fetch followed opportunities
      .addCase(fetchFollowedOpportunities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFollowedOpportunities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.followedItems = action.payload;
      })
      .addCase(fetchFollowedOpportunities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Toggle follow status
      .addCase(toggleFollow.fulfilled, (state, action) => {
        const { id, followed } = action.payload;
        // Update in regular items
        const itemIndex = state.items.findIndex((item) => item._id === id);
        if (itemIndex !== -1) {
          state.items[itemIndex].is_followed = followed;
        }

        // Add/remove from followed items
        if (followed) {
          const item = state.items.find((item) => item._id === id);
          if (item && !state.followedItems.some((f) => f._id === id)) {
            state.followedItems.push({ ...item, is_followed: true });
          }
        } else {
          state.followedItems = state.followedItems.filter(
            (item) => item._id !== id
          );
        }
      });
  },
});

export const { setFilters, resetFilters } = opportunitiesSlice.actions;

export default opportunitiesSlice.reducer;
