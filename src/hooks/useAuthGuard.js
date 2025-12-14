import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthGuard = (redirectTo = '/auth/login') => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('admin');
    
    if (!isAuthenticated) {
      navigate(redirectTo);
    }
  }, [navigate, redirectTo]);
  
  return !!localStorage.getItem('admin');
};