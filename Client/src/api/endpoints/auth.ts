import { api } from "../axiosConfig";
import type { LoginData, RegisterData, VKAuthData, AuthResponse, User } from "../../types/user";

export const authAPI = {
    login: async (data: LoginData): Promise<AuthResponse> => {
        const response = await api.post('/v0/auth/login', data);
        localStorage.setItem('accessToken', response.data.accessTokend);
        return response.data;
    },

    register: async (data: RegisterData): Promise<AuthResponse> => {
        const response = await api.post('/v0/auth/register', data);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    vkAuth: async (data: VKAuthData): Promise<AuthResponse> => {
        const response = await api.post('/v0/auth/vk', data);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    logout: async (): Promise<void> => {
        await api.post('/v0/auth/logout');
        localStorage.removeItem('accessToken');
    },

    refreshToken: async (): Promise<{accessToken: string}> => {
        const response = await api.post('/auth/token/refresh');
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    getProfile: async (): Promise<User> => {
        const response = await api.get('/v0/auth/profile');
        return response.data;
    }
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('accessToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};
