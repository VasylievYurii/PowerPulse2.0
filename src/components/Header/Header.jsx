import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import UserBar from '../UserBar/UserBar';
import { LogoutRouteStyled } from '../LogOutBtn/LogOutBtn.styled';
import { logOutUser } from '../../redux/auth/operations';
import {
  HeaderContainer,
  Navigation,
  NavWrapper,
  SecondNavWrapper,
  StyledLink,
  Burger,
  StyledLinkSettings,
  LogoutIconStyled,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const { targetBmr } = useSelector((state) => state.indicators.indicators);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        <SecondNavWrapper>
          <MediaQuery minWidth={1440}>
            {targetBmr === 0 ? (
              (console.log('NavWrapper not rendered: NaN'), null)
            ) : (
              <NavWrapper>
                <StyledLink to="/diary">Diary</StyledLink>
                <StyledLink to="/products">Products</StyledLink>
                <StyledLink to="/exercises">Exercises</StyledLink>
                {console.log('NavWrapper rendered')}
              </NavWrapper>
            )}
          </MediaQuery>
          <StyledLinkSettings to="/profile">
            <UserBar />
          </StyledLinkSettings>
          <MediaQuery minWidth={1440}>
            <LogoutRouteStyled onClick={handleLogOut} to="/welcome">
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
