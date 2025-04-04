// src/services/opportunityService.ts
import axios from "axios";
import { Opportunity, OpportunityFilters } from "../types/Opportunity";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Configurar interceptor para tokens
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
  // Obtener todas las oportunidades con filtros
  async getOpportunities(
    filters: OpportunityFilters = {}
  ): Promise<Opportunity[]> {
    const params = new URLSearchParams();

    if (filters.type) params.append("type", filters.type);
    if (filters.startDate) params.append("startDate", filters.startDate);
    if (filters.endDate) params.append("endDate", filters.endDate);
    if (filters.onlyActive !== undefined)
      params.append("onlyActive", String(filters.onlyActive));

    const response = await api.get(`/opportunities?${params.toString()}`);
    return response.data;
  },

  // Obtener oportunidades seguidas con filtros
  async getFollowedOpportunities(
    filters: OpportunityFilters = {}
  ): Promise<Opportunity[]> {
    const params = new URLSearchParams();

    if (filters.type) params.append("type", filters.type);
    if (filters.startDate) params.append("startDate", filters.startDate);
    if (filters.endDate) params.append("endDate", filters.endDate);
    if (filters.onlyActive !== undefined)
      params.append("onlyActive", String(filters.onlyActive));

    const response = await api.get(
      `/opportunities/followed?${params.toString()}`
    );
    return response.data;
  },

  // Alternar el seguimiento de una oportunidad
  async toggleFollowOpportunity(id: string): Promise<{ followed: boolean }> {
    const response = await api.patch(`/opportunities/${id}/follow`);
    return response.data;
  },

  // Login (para obtener el token)
  async login(username: string, password: string) {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  },

  // Obtener oportunidad por ID
  async getOpportunityById(id: string): Promise<Opportunity> {
    const response = await api.get(`/opportunities/${id}`);
    return response.data;
  },
};

export default opportunityService;
