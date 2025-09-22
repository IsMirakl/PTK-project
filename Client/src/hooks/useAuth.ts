/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { authApi } from "../services/api";
import type { User, LoginData, RegisterData, VKAuthData } from "../types/user";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuth();
      setIsInitialized(true);
    };
    initializeAuth();
  }, []);

  const login = async (data: LoginData): Promise<boolean> => {
    setIsLoading(true);
    setError('');
    try {
      const response = await authApi.login(data);
      setUser(response.user);
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ошибка входа');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    setError('');
    try {
      const response = await authApi.register(data);
      setUser(response.user);
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ошибка регистрации');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const vkAuth = async (data: VKAuthData): Promise<boolean> => {
    setIsLoading(true);
    setError('');
    try {
      const response = await authApi.vkAuth(data);
      setUser(response.user);
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ошибка VK авторизации');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    } finally {
      localStorage.removeItem('accessToken');
      setUser(null);
    }
  };

  const checkAuth = async (): Promise<boolean> => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setUser(null);
      return false;
    }

    setIsLoading(true);
    try {
      const userData = await authApi.getProfile();
      setUser(userData);
      return true;
    } catch (error: any) {
      if (error.response?.status === 401) {
        try {
          await authApi.refreshToken();
          const userData = await authApi.getProfile();
          setUser(userData);
          return true;
        } catch (refreshError) {
          localStorage.removeItem('accessToken');
          setUser(null);
          return false;
        }
      }
      setUser(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    isInitialized,
    login,
    register,
    vkAuth,
    logout,
    checkAuth
  };
};