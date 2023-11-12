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
  LogOutIconOnMenuStyled,
} from './MobileMenu.styled';
import MobileMenuPortal from './MobileMenuPortal';

const MobileMenu = ({ onClick }) => {
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
          <LogOutStyled to="/welcome" onClick={onClick}>
            <span>Logout</span>
            <LogOutIconOnMenuStyled>
              <use href={`${sprite}#icon-logout`} />
            </LogOutIconOnMenuStyled>
          </LogOutStyled>
        </MenuContainerStyled>
      </BackdropMenuStyled>
    </MobileMenuPortal>
  );
};

export default MobileMenu;
