import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import SignUpForm from '../components/SignUpForm/index';
import WelcomeStats from '../components/WelcomeStats/WelcomeStats';
import {
  TitleSignupStyled,
  ParagrStyled,
  NavLinkStyled,
  TextRedirectStyled,
} from './SignUp.styled';

const SignUp = () => {
  return (
    <SectionTemplate>
      <TitleSignupStyled>Sign Up</TitleSignupStyled>
      <ParagrStyled>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </ParagrStyled>
      <SignUpForm />
      <TextRedirectStyled>
        Already have an account?{' '}
        <NavLinkStyled to="/signin">Sign In</NavLinkStyled>
      </TextRedirectStyled>
      <WelcomeStats />
    </SectionTemplate>
  );
};

export default SignUp;
