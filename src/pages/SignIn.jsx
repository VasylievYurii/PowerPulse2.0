import { Link, useParams } from 'react-router-dom';
import SectionTemplateNoAuth from '../components/SectionTemplateNoAuth';
import SignInForm from '../components/SignInForm';
import WelcomeStats from '../components/WelcomeStats/WelcomeStats';

import {
  TitleSignupStyled,
  ParagrStyled,
  NavLinkStyled,
  TextRedirectStyled,
} from './SignUp.styled';
import SectionTemplateLeft from '../components/SectionTemplateLeft';
import Logo from '../components/Logo';
import SecondWrapperTemplate from '../components/SecondWrapperTemplate';

/** Email verification block start*/
import axios from 'axios';
import { toast } from 'react-toastify';
const toastError = (text) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
const toastSuccess = (text) => {
  toast.success(text, {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

const instance = axios.create({
  baseURL: 'https://powerpulse-t5-backend.onrender.com/api/',
});

const verifyEmail = async (verifyToken) => {
  try {
    const { data } = await instance.get(`auth/verify/${verifyToken}`);
    toastSuccess(`${data.message}! Use your credentials to login`);
  } catch (error) {
    toastError(`Error when verifyin email: ${error.response.data}`);
  }
};

const SignIn = () => {
  const { verificationToken } = useParams();
  if (verificationToken) verifyEmail(verificationToken);
  return (
    <SectionTemplateNoAuth>
      <SectionTemplateLeft>
        <Link to="/welcome">
          <Logo />
        </Link>
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
        </SecondWrapperTemplate>
      </SectionTemplateLeft>

      <WelcomeStats />
    </SectionTemplateNoAuth>
  );
};

export default SignIn;
