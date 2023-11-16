import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  InputStyled,
  ErrorDivStyled,
  WrapFormStyled,
  WrapperErrorStyled,
  SvgIconCheckBoxStyled,
  LabelWrapStyled,
  IconWrappedStyled,
  SvgIconEyeStyled,
} from './SignUpForm.styled';
import { ButtonSubmitStyled } from '../SignInForm/SignInForm.styled';

const toastInfo = (text) => {
  toast.info(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short! Must be minimum 6 symbols')
    .max(50, 'Too Long! 50 symbols - is maximum.')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email. Here is an example: example@mail.com')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Too Short! Must be minimum 6 symbols')
    .required('Password is required'),
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

function validateName(value) {
  let error;
  if (value === 'admin' || value === 'god') {
    error = 'Nice try!';
  }
  return error;
}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye`);
  const [type, setType] = useState('password');
  const [validColor, setValidColor] = useState('red');

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
    toastInfo(
      'You have been sent a verification email. Follow the instructions in the email.',
    );
  };

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(`${sprite}#icon-eye-off`);
    } else {
      setType('password');
      setToggleIcon(`${sprite}#icon-eye`);
    }
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
                name="name"
                placeholder="Name"
                validate={validateName}
              />
              {errors.name && touched.name ? (
                <WrapperErrorStyled>
                  <SvgIconCheckBoxStyled>
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled>{errors.name}</ErrorDivStyled>
                </WrapperErrorStyled>
              ) : null}
            </div>

            <div>
              <InputStyled
                type="text"
                name="email"
                validate={validateEmail}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <WrapperErrorStyled>
                  <SvgIconCheckBoxStyled>
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled>{errors.email}</ErrorDivStyled>
                </WrapperErrorStyled>
              ) : null}
            </div>

            <div>
              <LabelWrapStyled>
                <InputStyled
                  type={type}
                  name="password"
                  placeholder="Password"
                />
                <IconWrappedStyled>
                  <SvgIconEyeStyled onClick={togglePassInput}>
                    <use href={toggleIcon} />
                  </SvgIconEyeStyled>
                </IconWrappedStyled>
              </LabelWrapStyled>

              {errors.password && touched.password ? (
                <WrapperErrorStyled>
                  <SvgIconCheckBoxStyled>
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled>{errors.password}</ErrorDivStyled>
                </WrapperErrorStyled>
              ) : null}
            </div>
          </WrapFormStyled>

          <ButtonSubmitStyled type="submit">Sign Up</ButtonSubmitStyled>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
