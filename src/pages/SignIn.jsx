import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
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
    <SectionTemplate>
      <TitleSignupStyled>Sign In</TitleSignupStyled>
      <ParagrStyled>
        Welcome! Please enter your credentials to login to the platform:
      </ParagrStyled>
      <SignInForm />
      <TextRedirectStyled $margin>
        Don’t have an account?{' '}
        <NavLinkStyled to="/signup"> Sign Up</NavLinkStyled>
      </TextRedirectStyled>
      {/* <button onClick={handleLogOut}>Logout</button> */}
      <WelcomeStats />
    </SectionTemplate>
  );
};

export default SignIn;
