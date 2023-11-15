import sprite from '../../assets/sprite.svg';
import { LogoutRouteStyled, LogoutIcon } from './LogOutBtn.styled';
import { logOutUser } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const LogOutBtn = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(logOutUser());
    onClick();
  };

  return (
    <LogoutRouteStyled to="/welcome" onClick={handleCloseClick}>
      <span>Logout</span>
      <LogoutIcon>
        <use href={`${sprite}#icon-logout`} />
      </LogoutIcon>
    </LogoutRouteStyled>
  );
};

export default LogOutBtn;
