import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/signin' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn ;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;
