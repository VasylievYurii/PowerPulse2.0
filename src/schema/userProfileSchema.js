import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  height: Yup.number()
    .min(150, 'Height must be at least 150 cm')
    .max(300, 'Height must be no more than 300 cm')
    .required('Height is required'),
  currentWeight: Yup.number()
    .min(35, 'Current weight must be at least 35 kg')
    .max(300, 'Current weight must be no more than 300 kg')
    .required('Current weight is required'),
  desiredWeight: Yup.number()
    .min(35, 'Desired weight must be at least 35 kg')
    .max(120, 'Desired weight should be no more than 120 kg')
    .required('Desired weight is required'),
  birthday: Yup.date()
    .required('Birthday is required')
    .test('is-adult', 'You must be 18 years or older', function (value) {
      const today = new Date();
      const age = today.getFullYear() - new Date(value).getFullYear();
      return age >= 18;
    }),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid blood type')
    .required('Blood type is required'),
  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender')
    .required('Gender is required'),
  levelActivity: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
    .required('Activity level is required'),
});

export default userSchema;
