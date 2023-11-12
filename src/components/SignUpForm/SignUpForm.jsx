import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import sprite from '../../assets/sprite.svg';
import {
  InputStyled,
  ErrorDivStyled,
  WrapFormStyled,
  WrapErrorStyled,
  SvgIconCheckBoxStyled,
  LabelWrapStyled,
  IconWrapdStyled,
  SvgIconEyeStyled,
} from './SignUpForm.styled';
import { ButtonSubmitStyled } from '../SignInForm/SignInForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
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
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
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
              <InputStyled type="text" name="name" placeholder="Name" />
              {errors.name && touched.name ? (
                <WrapErrorStyled>
                  <SvgIconCheckBoxStyled>
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled>{errors.name}</ErrorDivStyled>
                </WrapErrorStyled>
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
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <IconWrapdStyled>
                  <SvgIconEyeStyled>
                    <use href={`${sprite}#icon-eye`} />
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

          <ButtonSubmitStyled type="submit">Sign Up</ButtonSubmitStyled>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
