import { ButtonStyled } from './Button.styled';

function Button({ children }) {
  return <ButtonStyled type="button">{children}</ButtonStyled>;
}

export default Button;
