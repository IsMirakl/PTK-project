import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface GuestRouteProps {
  children: React.ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const { user, isInitialized } = useAuth();
  if (!isInitialized) {
    return <div>Загрузка...</div>;
  }

  return user ? <Navigate to="/profile" replace /> : <>{children}</>;
};

export default GuestRoute;