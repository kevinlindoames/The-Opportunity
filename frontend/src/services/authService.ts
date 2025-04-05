// src/services/authService.ts
import axios from "axios";

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

export const authService = {
  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });

      // Almacenar el token en localStorage
      if (isBrowser() && response.data && response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },

  logout() {
    if (isBrowser()) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  getCurrentUser() {
    if (!isBrowser()) return null;

    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },

  isAuthenticated() {
    if (!isBrowser()) return false;
    return !!localStorage.getItem("token");
  },
};

export default authService;
