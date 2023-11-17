import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { useState } from 'react';
import signinSchema from '../../schema/signinSchema';
import {
  InputStyled,
  WrapFormStyled,
  ErrorDivStyled,
  SvgIconEyeStyled,
  SvgIconCheckBoxStyled,
  WrapperErrorStyled,
  LabelWrapStyled,
  IconWrappedStyled,
} from '../SignUpForm/SignUpForm.styled';
import { ButtonSubmitStyled } from './SignInForm.styled';
import sprite from '../../assets/sprite.svg';
import validateEmail from '../../js/validateEmail';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye`);
  const [type, setType] = useState('password');
  const [validColor, setValidColor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
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
      validationSchema={signinSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <WrapFormStyled>
            <div>
              <LabelWrapStyled>
                <InputStyled
                  type="text"
                  name="email"
                  validate={validateEmail}
                  placeholder="Email"
                  $border_color={validColor}
                />
              </LabelWrapStyled>

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

          <ButtonSubmitStyled type="submit">Sign In</ButtonSubmitStyled>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
