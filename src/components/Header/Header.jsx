import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Navigation,
  NavWrapper,
  SecondNavWrapper,
  StyledLink,
  IconSettings,
  IconUser,
  Burger,
  UserWrapper,
  StyledLinkSettings,
  LogoutIconStyled,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import { LogoutRouteStyled } from '../LogOutBtn/LogOutBtn.styled';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        <SecondNavWrapper>
          <MediaQuery minWidth={1440}>
            <NavWrapper>
              <StyledLink to="/diary">Diary</StyledLink>
              <StyledLink to="/products">Products</StyledLink>
              <StyledLink to="/exercises">Exercises</StyledLink>
            </NavWrapper>
          </MediaQuery>
          <StyledLinkSettings to="/profile">
            <IconSettings>
              <use href={`${sprite}#icon-settings`} />
            </IconSettings>
            <UserWrapper>
              <IconUser>
                <use href={`${sprite}#icon-user`} />
              </IconUser>
            </UserWrapper>
          </StyledLinkSettings>
          <MediaQuery minWidth={1440}>
            <LogoutRouteStyled to="/welcome">
              <span>Logout</span>
              <LogoutIconStyled>
                <use href={`${sprite}#icon-logout`} />
              </LogoutIconStyled>
            </LogoutRouteStyled>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            <Burger onClick={toggleMenu}>
              <use href={`${sprite}#icon-menu`} />
            </Burger>
          </MediaQuery>
        </SecondNavWrapper>
      </Navigation>
      <MediaQuery maxWidth={1439}>
        {isMenuOpen && <MobileMenu onClick={toggleMenu} />}
      </MediaQuery>
    </HeaderContainer>
  );
};

export default Header;
