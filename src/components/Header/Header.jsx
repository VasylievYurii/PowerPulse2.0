import MediaQuery from 'react-responsive';
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
} from './Header.styled';
import sprite from '../../assets/sprite.svg';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo />

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
          <MediaQuery maxWidth={1339}>
            <Burger>
              <use href={`${sprite}#icon-menu`} />
            </Burger>
          </MediaQuery>
        </SecondNavWrapper>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
