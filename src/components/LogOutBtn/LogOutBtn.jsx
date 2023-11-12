import React from 'react';
import sprite from '../../assets/sprite.svg';
import { LogoutRouteStyled, LogoutIcon } from './LogOutBtn.styled';

const LogOutBtn = ({ onClick }) => {
  const handleCloseClick = () => {
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
