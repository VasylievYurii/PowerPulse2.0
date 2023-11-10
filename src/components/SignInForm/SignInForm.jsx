import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { ButtonSubmitStyled } from './SignInForm.styled';
import {
  InputStyled,
  WrapFormStyled,
  ErrorDivStyled,
} from '../SignUpForm/SignUpForm.styled';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}
//     /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

//    /^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <WrapFormStyled>
            <div>
              <InputStyled
                type="text"
                name="email"
                validate={validateEmail}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <ErrorDivStyled>{errors.email}</ErrorDivStyled>
              ) : null}
            </div>
            <div>
              <InputStyled type="text" name="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <ErrorDivStyled>{errors.password}</ErrorDivStyled>
              ) : null}
            </div>
          </WrapFormStyled>

          <ButtonSubmitStyled type="submit">Sign In</ButtonSubmitStyled>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
