// import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn } = useAuth();

  // Тимчасове знизу. Перемикати true/false
  let isLoggedIn = true;
  // Тимчасове зверху

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
