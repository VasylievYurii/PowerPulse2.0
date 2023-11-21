import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import SectionTemplateNoAuth from '../components/SectionTemplateNoAuth';
import SectionTemplateLeft from '../components/SectionTemplateLeft';
import Logo from '../components/Logo';
import SecondWrapperTemplate from '../components/SecondWrapperTemplate';
import SignUpForm from '../components/SignUpForm';
import WelcomeStats from '../components/WelcomeStats';

import {
  TitleSignupStyled,
  ParagrStyled,
  NavLinkStyled,
  TextRedirectStyled,
} from './SignUp.styled';

const SignUp = () => {
  return (
    <SectionTemplateNoAuth>
      <SectionTemplateLeft>
        <Link to="/welcome">
          <Logo />
        </Link>
        <SecondWrapperTemplate>
          <TitleSignupStyled>Sign Up</TitleSignupStyled>
          <ParagrStyled>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </ParagrStyled>
          <SignUpForm />
          <TextRedirectStyled>
            Already have an account?{' '}
            <NavLinkStyled to="/signin">Sign In</NavLinkStyled>
          </TextRedirectStyled>
        </SecondWrapperTemplate>
      </SectionTemplateLeft>

      <WelcomeStats />
    </SectionTemplateNoAuth>
  );
};

export default SignUp;
