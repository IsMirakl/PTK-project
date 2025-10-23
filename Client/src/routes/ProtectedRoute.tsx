import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const token = localStorage.getItem('accessToken');
  
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  if (!requiredRole) {
    return <>{children}</>;
  }

  const userData = localStorage.getItem('userData');
  if (!userData) {
    return <Navigate to="/auth" replace />;
  }

  try {
    const user = JSON.parse(userData);
    const userRole = user.role;
    
    const hasAccess = Array.isArray(requiredRole) 
      ? requiredRole.includes(userRole)
      : userRole === requiredRole;

    if (!hasAccess) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <>{children}</>;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return <Navigate to="/auth" replace />;
  }
};

export default ProtectedRoute;