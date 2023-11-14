import { useSelector } from 'react-redux';
import { selectUserAuthenticated, selectUserToken } from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectUserToken);
  const isRefreshing = useSelector(selectUserAuthenticated);

  return {
    isLoggedIn,
    isRefreshing,
  };
};
