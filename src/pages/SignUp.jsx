import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import SignUpForm from '../components/SignUpForm/index';

const SignUp = () => {
  return (
    <SectionTemplate>
      <h1>Sign Up</h1>
      <p>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <SignUpForm />
      <p>Already have an account? Sign In</p>
    </SectionTemplate>
  );
};

export default SignUp;
