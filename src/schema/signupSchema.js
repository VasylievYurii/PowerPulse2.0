import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short! Must be minimum 6 symbols')
    .max(50, 'Too Long! 50 symbols - is maximum.')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email. Here is an example: example@mail.com')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Too Short! Must be minimum 6 symbols')
    .max(50, 'Too Long! 50 symbols - is maximum.')
    .required('Password is required'),
});

export default signupSchema;
