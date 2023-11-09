import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  // const { isLoggedIn, isRefreshing } = useAuth();

  //Тимчасово знизу. Перемикати true/false
  let isLoggedIn = true;
  let isRefreshing = true;
  //Тимчасове зврерху

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
