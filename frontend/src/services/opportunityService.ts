import axios from "axios";
import { Opportunity, OpportunityFilters } from "../types/Opportunity";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const opportunityService = {
  async getOpportunities(
    filters: OpportunityFilters = {}
  ): Promise<Opportunity[]> {
    try {
      const params: Record<string, any> = {};

      if (filters.type && filters.type !== "all") {
        params.type = filters.type;
      }

      if (filters.startDate) {
        params.startDate = filters.startDate;
      }

      if (filters.endDate) {
        params.endDate = filters.endDate;
      }

      if (filters.onlyActive === false) {
        params.onlyActive = false;
      }

      const response = await api.get("/opportunities", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching opportunities:", error);
      return [];
    }
  },

  async getFollowedOpportunities(
    filters: OpportunityFilters = {}
  ): Promise<Opportunity[]> {
    try {
      const params: Record<string, any> = {};

      if (filters.type && filters.type !== "all") {
        params.type = filters.type;
      }

      if (filters.startDate) {
        params.startDate = filters.startDate;
      }

      if (filters.endDate) {
        params.endDate = filters.endDate;
      }

      if (filters.onlyActive === false) {
        params.onlyActive = false;
      }

      const response = await api.get("/opportunities/followed", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching followed opportunities:", error);
      return [];
    }
  },

  async getOpportunityById(id: string): Promise<Opportunity> {
    try {
      const response = await api.get(`/opportunities/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching opportunity with ID ${id}:`, error);
      throw error;
    }
  },

  async toggleFollowOpportunity(id: string): Promise<{ followed: boolean }> {
    try {
      const response = await api.patch(`/opportunities/${id}/follow`);
      return response.data;
    } catch (error) {
      console.error(`Error toggling follow for opportunity ${id}:`, error);
      throw error;
    }
  },

  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },
};

export default opportunityService;
