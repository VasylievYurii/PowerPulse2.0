import React, { Children, useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  MenuContainerStyled,
  CloseMenuBtnStyled,
  LinkStyled,
  NavContainerStyled,
  BackdropMenuStyled,
  IconCross,
  LogOutStyled,
} from './MobileMenu.styled';
import MobileMenuPortal from './MobileMenuPortal';
import { LogoutIcon } from '../LogOutBtn/LogOutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/operations';

const MobileMenu = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <MobileMenuPortal>
      <BackdropMenuStyled onClick={handleBackdropClick}>
        <MenuContainerStyled>
          <CloseMenuBtnStyled onClick={handleCloseClick}>
            <IconCross>
              <use href={`${sprite}#icon-cross`} />
            </IconCross>
          </CloseMenuBtnStyled>
          <NavContainerStyled>
            <LinkStyled to="/diary">Diary</LinkStyled>
            <LinkStyled to="/products">Products</LinkStyled>
            <LinkStyled to="/exercises">Exercises</LinkStyled>
          </NavContainerStyled>
          <LogOutStyled to="/welcome" onClick={handleLogOut}>
            <span>Logout</span>
            <LogoutIcon>
              <use href={`${sprite}#icon-logout`} />
            </LogoutIcon>
          </LogOutStyled>
        </MenuContainerStyled>
      </BackdropMenuStyled>
    </MobileMenuPortal>
  );
};

export default MobileMenu;
