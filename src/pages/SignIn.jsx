import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import SignInForm from '../components/SignInForm/index';
import WelcomeStats from '../components/WelcomeStats/WelcomeStats';
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
      <TextRedirectStyled bigmargin="true">
        Don’t have an account?{' '}
        <NavLinkStyled to="/signup"> Sign Up</NavLinkStyled>
      </TextRedirectStyled>
      <WelcomeStats />
    </SectionTemplate>
  );
};

export default SignIn;
