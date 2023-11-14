import { Link } from 'react-router-dom';
import SectionTemplateNoAuth from '../components/SectionTemplateNoAuth';
import SignInForm from '../components/SignInForm/index';
import WelcomeStats from '../components/WelcomeStats/WelcomeStats';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { logOutUser } from '../redux/auth/operations';
// import { selectUserAuthenticated, selectUserToken } from '../redux/selectors';
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
  // const authenticated = useSelector(selectUserAuthenticated);
  // const currentToken = useSelector(selectUserToken);
  // console.log('authenticated', authenticated);
  // console.log('currentToken', currentToken);
  // const dispatch = useDispatch();

  // const handleLogOut = () => {
  //   dispatch(logOutUser());
  // };

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
          {/* <button onClick={handleLogOut}>Logout</button> */}
        </SecondWrapperTemplate>
      </SectionTemplateLeft>

      <WelcomeStats />
    </SectionTemplateNoAuth>
  );
};

export default SignIn;
