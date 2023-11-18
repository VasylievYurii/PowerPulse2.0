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
import { ErrorMess, SubmitBtn } from './UserForm.styled';

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
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      initialValues.name = userData.name;
      initialValues.email = userData.email;
    }
    if (profile) {
      initialValues.height = profile.height;
      initialValues.currentWeight = profile.currentWeight;
      initialValues.desiredWeight = profile.desiredWeight;
      initialValues.blood = String(profile.blood);
      initialValues.sex = profile.sex;
      initialValues.levelActivity = String(profile.levelActivity);
      initialValues.birthday = profile.birthday;
    }
  }, [userData, profile]);

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
        <Form autoComplete="off">
          {errors.email && touched.email && (
            <ErrorMess>{errors.email}</ErrorMess>
          )}
          {errors.height && touched.height && (
            <ErrorMess>{errors.height}</ErrorMess>
          )}
          {errors.currentWeight && touched.currentWeight && (
            <ErrorMess>{errors.currentWeight}</ErrorMess>
          )}
          {errors.desiredWeight && touched.desiredWeight && (
            <ErrorMess>{errors.desiredWeight}</ErrorMess>
          )}
          <InputUseForm />
          <RadioUseForm />
          <SubmitBtn type="submit">Save</SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
