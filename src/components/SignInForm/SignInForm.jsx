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
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
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
      setToggleIcon(`${sprite}#icon-eye`);
    } else {
      setType('password');
      setToggleIcon(`${sprite}#icon-eye-off`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const borderEmailColor =
          errors.email && touched.email
            ? '1px solid #D80027'
            : '1px solid #3CBF61';

        const borderPasswordColor =
          errors.password && touched.password
            ? '1px solid #D80027'
            : '1px solid #3CBF61';
        return (
          <Form autoComplete="off">
            <WrapFormStyled>
              <div>
                <LabelWrapStyled>
                  <InputStyled
                    border={borderEmailColor}
                    type="text"
                    name="email"
                    validate={validateEmail}
                    placeholder="Email"
                  />
                </LabelWrapStyled>

                {(errors.email && touched.email) ||
                (!errors.email && touched.email) ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={!errors.email && touched.email ? '#3CBF61' : null}
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={!errors.email && touched.email ? '#3CBF61' : null}
                    >
                      {errors.email ? errors.email : 'Success email'}
                    </ErrorDivStyled>
                  </WrapperErrorStyled>
                ) : null}
              </div>

              <div>
                <LabelWrapStyled>
                  <InputStyled
                    border={borderPasswordColor}
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
                {(errors.password && touched.password) ||
                (!errors.password && touched.password) ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={
                        !errors.password && touched.password ? '#3CBF61' : null
                      }
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={
                        !errors.password && touched.password ? '#3CBF61' : null
                      }
                    >
                      {errors.password ? errors.password : 'Success password'}
                    </ErrorDivStyled>
                  </WrapperErrorStyled>
                ) : null}
              </div>
            </WrapFormStyled>

            <ButtonSubmitStyled type="submit">Sign In</ButtonSubmitStyled>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
