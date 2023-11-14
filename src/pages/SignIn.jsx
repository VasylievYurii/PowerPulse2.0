import SectionTemplateNoAuth from '../components/SectionTemplateNoAuth';
import SignInForm from '../components/SignInForm/index';
import WelcomeStats from '../components/WelcomeStats/WelcomeStats';
import { ToastContainer } from 'react-toastify';

import {
  TitleSignupStyled,
  ParagrStyled,
  NavLinkStyled,
  TextRedirectStyled,
} from './SignUp.styled';
import SectionTemplateLeft from '../components/SectionTemplateLeft';
import Logo from '../components/Logo';
import SecondWrapperTemplate from '../components/SecondWrapperTemplate';

const SignIn = () => {
  return (
    <SectionTemplateNoAuth>
      <SectionTemplateLeft>
        <Logo />
        <SecondWrapperTemplate>
          <TitleSignupStyled>Sign In</TitleSignupStyled>
          <ParagrStyled>
            Welcome! Please enter your credentials to login to the platform:
          </ParagrStyled>
          <SignInForm />
          <TextRedirectStyled $margin>
            Don&apos;t have an account?{' '}
            <NavLinkStyled to="/signup"> Sign Up</NavLinkStyled>
          </TextRedirectStyled>
          <ToastContainer />
        </SecondWrapperTemplate>
      </SectionTemplateLeft>

      <WelcomeStats />
    </SectionTemplateNoAuth>
  );
};

export default SignIn;
