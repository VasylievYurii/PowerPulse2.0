import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  StyledLinkSettings,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo/>
        <StyledLink to="/diary">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
        <StyledLinkSettings to="/profile">
          <IconWrapper>
            <use href={`${sprite}#icon-settings`} />
          </IconWrapper>
        </StyledLinkSettings>
        <StyledLink to="/signin">SignIn</StyledLink>
        <StyledLink to="/signup">SignUp</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
