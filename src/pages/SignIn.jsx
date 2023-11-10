import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import SignInForm from '../components/SignInForm/index';
import {
  TitleSignupStyled,
  ParagrStyled,
  NavLinkStyled,
  TextRedirectStyled,
} from './SignUp.styled';

const SignIn = () => {
  return (
    <SectionTemplate>
      <TitleSignupStyled>Sign In</TitleSignupStyled>
      <ParagrStyled>
        Welcome! Please enter your credentials to login to the platform:
      </ParagrStyled>
      <SignInForm />
      <TextRedirectStyled>
        Don’t have an account?{' '}
        <NavLinkStyled to="/signup"> Sign Up</NavLinkStyled>
      </TextRedirectStyled>
    </SectionTemplate>
  );
};

export default SignIn;
