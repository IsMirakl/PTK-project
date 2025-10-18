import React from 'react';
import type { User, LoginData, RegisterData } from '../types/user';

interface AuthContextType{
    user: User | null,
    isLoading: boolean,
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  isLoading: false,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  refreshToken: async () => {},
});

export default AuthContext;