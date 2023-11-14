import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { ButtonSubmitStyled } from './SignInForm.styled';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import {
  InputStyled,
  WrapFormStyled,
  ErrorDivStyled,
  SvgIconEyeStyled,
  SvgIconCheckBoxStyled,
  WrapErrorStyled,
  LabelWrapStyled,
  IconWrapdStyled,
} from '../SignUpForm/SignUpForm.styled';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(6, 'Too Short!').required('Required!'),
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

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye`);
  const [type, setType] = useState('password');
  const [borderColor, setBorderColor] = useState('');
  // const [error, setError] = useState(null);
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

  // const toggleInputBorder = () => {
  //   const { errors, touched } = Formik;

  //   if (errors && touched === true) {
  //     setBorderColor('#D80027');
  //   } else {
  //     setBorderColor('#3CBF61');
  //   }
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SigninSchema}
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
                  $border_color={borderColor}
                />
              </LabelWrapStyled>

              {errors.email && touched.email ? (
                <WrapErrorStyled>
                  <SvgIconCheckBoxStyled>
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled>{errors.email}</ErrorDivStyled>
                </WrapErrorStyled>
              ) : null}
            </div>
            <div>
              <LabelWrapStyled>
                <InputStyled
                  type={type}
                  name="password"
                  placeholder="Password"
                  // $border_color={borderColor}
                />
                <IconWrapdStyled>
                  <SvgIconEyeStyled onClick={togglePassInput}>
                    <use href={toggleIcon} />
                  </SvgIconEyeStyled>
                </IconWrapdStyled>
              </LabelWrapStyled>

              {errors.password && touched.password ? (
                <WrapErrorStyled>
                  <SvgIconCheckBoxStyled>
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled>{errors.password}</ErrorDivStyled>
                </WrapErrorStyled>
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
