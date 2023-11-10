import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import SignInForm from '../components/SignInForm/index';

const SignIn = () => {
  return (
    <SectionTemplate>
      <h1>Sign In</h1>
      <div>
        Welcome! Please enter your credentials to login to the platform:
      </div>
      <SignInForm />
      <p>Don’t have an account? Sign Up</p>
    </SectionTemplate>
  );
};

export default SignIn;
