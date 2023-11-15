// import React from 'react';
import { Formik, Form } from 'formik';
import './useForm.css';
import RadioUseForm from './RadioUseForm/RadioUseForm';
// import { object, string, number } from 'yup';
import InputUseForm from './InputUseForm/InputUseForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateUser } from '../../redux/auth/operations';
import { updateUserProfile } from '../../redux/userProfile/userProfileOperations';
import { useDispatch } from 'react-redux';
import userSchema from '../../schema/userProfileSchema';

const initialValues = {
  name: '',
  email: 'annarybachok@gmail.com',
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
  useEffect(() => {
    if (userData) {
      initialValues.name = userData.name;
      initialValues.email = userData.email;
    }
  }, [userData]);

  const handleSubmit = (values) => {
    const { name, email, ...rest } = values;

    const nameEmailObject = { name };
    const restObject = { ...rest };

    console.log(nameEmailObject);
    console.log(restObject);
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
