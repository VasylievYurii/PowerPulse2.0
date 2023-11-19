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
import { SubmitBtn } from './UserForm.styled';
import format from 'date-fns/format';
import BirthdayCalendar from '../BirthdayCalendar/BirthdayCalendar';

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
  const [birthdayState, setBirthdayState] = useState('2004-11-14');

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

  const handleSubmit = (values) => {
    const { name, email, birthday, ...rest } = values;
    const nameEmailObject = { name };
    const restObject = { birthday: birthdayState, ...rest };
    dispatch(updateUser(nameEmailObject));
    dispatch(updateUserProfile(restObject));
  };

  const onDateChange = (date) => {
    let formDat = format(date, 'yyyy-dd-MM');
    setBirthdayState(formDat);
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
          <SubmitBtn type="submit">Save</SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
