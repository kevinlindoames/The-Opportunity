import axios from "axios";
import { Opportunity, OpportunityFilters } from "@/types/Opportunity";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const opportunityService = {
  async getOpportunities(filters?: OpportunityFilters): Promise<Opportunity[]> {
    try {
      const response = await axios.get(`${API_URL}/opportunities`, {
        params: filters,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching opportunities:", error);
      throw error;
    }
  },

  async getFollowedOpportunities(
    filters?: OpportunityFilters
  ): Promise<Opportunity[]> {
    try {
      const response = await axios.get(`${API_URL}/opportunities/followed`, {
        params: filters,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching followed opportunities:", error);
      throw error;
    }
  },

  async toggleFollow(opportunityId: string): Promise<any> {
    try {
      const response = await axios.patch(
        `${API_URL}/opportunities/${opportunityId}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error toggling follow:", error);
      throw error;
    }
  },
};
