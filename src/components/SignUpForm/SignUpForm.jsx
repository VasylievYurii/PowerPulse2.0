import { Formik, Form } from 'formik';
import signupSchema from '../../schema/signupSchema';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
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
import sprite from '../../assets/sprite.svg';
import validateEmail from '../../js/validateEmail';
import validateName from '../../js/validateName';

const toastInfo = (text) => {
  toast.info(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

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
      validationSchema={signupSchema}
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
