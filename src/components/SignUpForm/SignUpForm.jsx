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
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
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
      setToggleIcon(`${sprite}#icon-eye`);
    } else {
      setType('password');
      setToggleIcon(`${sprite}#icon-eye-off`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const borderNameColor =
          (errors.name && touched.name && "1px solid #D80027") ||
          (!errors.name && touched.name && "1px solid #3CBF61");
        const borderEmailColor =
          (errors.email && touched.email && "1px solid #D80027") ||
          (!errors.email && touched.email && "1px solid #3CBF61");
        const borderPasswordColor =
          (errors.password && touched.password && "1px solid #D80027") ||
          (!errors.password && touched.password && "1px solid #3CBF61");

        return (
          <Form autoComplete="off">
            <WrapFormStyled>
              <div>
                <InputStyled
                  border={borderNameColor}
                  type="text"
                  name="name"
                  placeholder="Name"
                  validate={validateName}
                />
                {errors.name && touched.name || !errors.name && touched.name ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={!errors.name && touched.name ? "#3CBF61" : null}
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={!errors.name && touched.name ? "#3CBF61" : null}
                    >{errors.name ? errors.name : "Success name"}</ErrorDivStyled>
                  </WrapperErrorStyled>
                ) : null}
              </div>

              <div>
                <InputStyled
                  border={borderEmailColor}
                  type="text"
                  name="email"
                  validate={validateEmail}
                  placeholder="Email"
                />
                {errors.email && touched.email || !errors.email && touched.email ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={!errors.email && touched.email ? "#3CBF61" : null}
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={!errors.email && touched.email ? "#3CBF61" : null}
                    >{errors.email ? errors.email : "Success email"}</ErrorDivStyled>
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
                {errors.password && touched.password || !errors.password && touched.password ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={!errors.password && touched.password ? "#3CBF61" : null}
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={!errors.password && touched.password ? "#3CBF61" : null}
                    >{errors.password ? errors.password : "Success password"}</ErrorDivStyled>
                  </WrapperErrorStyled>
                ) : null}
              </div>
            </WrapFormStyled>

            <ButtonSubmitStyled type="submit">Sign Up</ButtonSubmitStyled>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
