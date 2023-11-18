import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectUserData,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userDate = useSelector(selectUserData);

  return {
    isLoggedIn,
    isRefreshing,
    userDate,
  };
};
