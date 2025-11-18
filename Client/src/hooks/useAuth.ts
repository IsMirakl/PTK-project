/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { authAPI } from "../api";
import type { User, LoginData, RegisterData } from "../types/user";

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

  const buildFullName = (firstName: string, lastName: string, middleName?: string): string => {
    return `${lastName} ${firstName}${middleName ? ` ${middleName}` : ''}`.trim();
  };

  const parseFullName = (fullName: string) => {
    const parts = fullName.split(' ');
    return {
      lastName: parts[0] || '',
      firstName: parts[1] || '',
      middleName: parts[2] || ''
    };
  };

  const login = async (data: LoginData): Promise<boolean> => {
    setIsLoading(true);
    setError('');
    try {
      const response = await authAPI.login(data);
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
      
      const registerData = {
        ...data,
        fullName: buildFullName(data.firstName, data.lastName, data.middleName)
      };

      const response = await authAPI.register(registerData);
      setUser(response.user);
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ошибка регистрации');
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async (): Promise<void> => {
    try {
      await authAPI.logout();
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
      const userData = await authAPI.getProfile();
      setUser(userData);
      return true;
    } catch (error: any) {
      if (error.response?.status === 401) {
        try {
          await authAPI.refreshToken();
          const userData = await authAPI.getProfile();
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
    logout,
    checkAuth,
    parseFullName
  };
};