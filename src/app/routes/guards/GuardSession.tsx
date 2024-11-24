import { Navigate, Outlet } from 'react-router-dom';
import { isTokenExpired } from '../../core/utils/authUtils';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token && !isTokenExpired(token);  
  if (!isAuthenticated) {
    alert('Debes iniciar sesión para acceder a esta página');
    return <Navigate to="/" replace />;
  }
  return children || <Outlet />;
};

export default PrivateRoute;
