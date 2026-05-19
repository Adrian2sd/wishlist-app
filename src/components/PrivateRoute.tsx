import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { ReactNode } from 'react';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <p className="text-center py-10">Cargando...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};