// src/services/opportunityService.ts
import axios from "axios";
import { Opportunity, OpportunityFilters } from "../types/Opportunity";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const isBrowser = () => typeof window !== "undefined";

// Configurar interceptor para tokens
const api = axios.create({
  baseURL: API_URL,
});

// Asegurarse de que se envía el token en cada solicitud
api.interceptors.request.use(
  (config) => {
    if (isBrowser()) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expirado o no válido
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirigir a la página de login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const opportunityService = {
  // Obtener todas las oportunidades con filtros
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

      // Usar showAll en lugar de onlyActive para indicar que queremos todas las oportunidades
      if (filters.onlyActive === false) {
        params.showAll = "true"; // Enviamos como string para evitar problemas de conversión
      }

      const response = await api.get("/opportunities", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching opportunities:", error);
      return [];
    }
  },

  // Aplicar el mismo patrón a getFollowedOpportunities
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
        params.showAll = "true";
      }

      const response = await api.get("/opportunities/followed", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching followed opportunities:", error);
      return [];
    }
  },

  // Resto del código sin cambios
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

  // En el método login de opportunityService.ts
  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });

      // Asegúrate de que el token se almacene correctamente
      if (response.data && response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        // También puedes almacenar información del usuario si es necesario
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },
};

export default opportunityService;
