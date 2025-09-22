import axios from "axios";
import type { LoginData, RegisterData, VKAuthData, AuthResponse, User } from "../types/user";

const api = axios.create({
  baseURL: "https://localhost:PORT/api",
  withCredentials: true,
});

export const getAuthHeader = () => {
  const token = localStorage.getItem('accessToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};


api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            localStorage.removeItem('accessToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)


export const authApi = {
    login: async (data: LoginData): Promise<AuthResponse> => {
       const response = await api.post('/auth/login', data);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },
    
    register: async (data: RegisterData): Promise<AuthResponse> => {
        const response = await api.post('/auth/register', data);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    vkAuth: async(data: VKAuthData): Promise<AuthResponse> => {
        const response = await api.post('/auth/vk', data);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    logout: async (): Promise<void> => {
        await api.post('/auth/logout', {}, { 
            headers: getAuthHeader() 
    });
    localStorage.removeItem('accessToken');
    },

    refreshToken: async (): Promise<{accessToken: string}> => {
        const response = await api.post('/auth/token/refresh');
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },
    
    getProfile: async (): Promise<User> => {
        const response = await api.get('/auth/profile', { 
            headers: getAuthHeader() 
    });
    return response.data;
  },
};


export default api;

