import * as Yup from 'yup';

const signinSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(6, 'Too Short!').required('Required!'),
});

export default signinSchema;
