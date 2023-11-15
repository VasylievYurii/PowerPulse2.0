import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/operations';
import {
  updateUserProfile,
  getUserProfile,
} from '../../redux/userProfile/userProfileOperations';
import userSchema from '../../schema/userProfileSchema';
import RadioUseForm from './RadioUseForm/RadioUseForm';
import InputUseForm from './InputUseForm/InputUseForm';
import './useForm.css';

const initialValues = {
  name: '',
  email: '',
  height: 0,
  currentWeight: 0,
  desiredWeight: 0,
  blood: 0,
  sex: '',
  levelActivity: 0,
  birthday: '2004-11-14',
};

const UserForm = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    if (userData) {
      dispatch(getUserProfile());
      initialValues.name = userData.name;
      initialValues.email = userData.email;
      if (profile) {
        initialValues.height = profile.height;
        initialValues.currentWeight = profile.currentWeight;
        initialValues.desiredWeight = profile.desiredWeight;
        initialValues.blood = profile.blood;
        initialValues.sex = profile.sex;
        initialValues.levelActivity = profile.levelActivity;
        initialValues.birthday = profile.birthday;
      }
    }
  }, [userData]);

  const handleSubmit = (values) => {
    const { name, email, ...rest } = values;
    const nameEmailObject = { name };
    const restObject = { ...rest };
    dispatch(updateUser(nameEmailObject));
    dispatch(updateUserProfile(restObject));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" className="formik">
          {errors.email && touched.email && (
            <div className="error-mess">{errors.email}</div>
          )}
          {errors.height && touched.height && (
            <div className="error-mess">{errors.height}</div>
          )}
          {errors.currentWeight && touched.currentWeight && (
            <div className="error-mess">{errors.currentWeight}</div>
          )}
          {errors.desiredWeight && touched.desiredWeight && (
            <div className="error-mess">{errors.desiredWeight}</div>
          )}
          <InputUseForm />
          <RadioUseForm />
          <button type="submit" className="submit-btn">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
