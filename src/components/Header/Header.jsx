import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/diary">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
        <StyledLink to="/profile">
          <IconWrapper>
            <use href={`${sprite}#icon-settings`} />
          </IconWrapper>
        </StyledLink>
        <StyledLink to="/signin">SignIn</StyledLink>
        <StyledLink to="/signup">SignUp</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
