import { useEffect, useState } from 'react';
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
import { SubmitBtn, SuccessText } from './UserForm.styled';

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

const UserForm = ({ onClick }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [birthdayState, setBirthdayState] = useState('2004-11-14');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
      setBirthdayState(profile.birthday);
    }
  }, [userData, profile, birthdayState]);

  const handleSubmit = (values, actions) => {
    const { name, email, birthday, ...rest } = values;
    const nameEmailObject = { name };
    const restObject = { birthday: birthdayState, ...rest };
    console.log('restObject:', restObject);
    dispatch(updateUser(nameEmailObject));
    dispatch(updateUserProfile(restObject));
    setIsFormSubmitted(true);
    console.log('restObject after:', restObject);
  };

  const onDateChange = (date) => {
    const newDate = date.toISOString();
    setBirthdayState(newDate);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <InputUseForm
            onDateChange={onDateChange}
            errors={errors}
            touched={touched}
          />
          <RadioUseForm />
          <SubmitBtn type="submit" onClick={onClick}>
            Save
          </SubmitBtn>
          {isFormSubmitted && (
            <SuccessText>The form has been submitted successfully!</SuccessText>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
