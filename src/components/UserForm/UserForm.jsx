// import React from 'react';
import { Formik, Form } from 'formik';
import './useForm.css';
import { RadioUseForm } from './RadioUseForm';
import { InputUseForm } from './InputUseForm';
import { object, string, number, date } from 'yup';

let userSchema = object({
  login: string().required(),
  email: string().email(),
  sex: string().required(),
  blood: number().required().positive().integer(),
  height: number().min(150).required().positive().integer(),
  levelActivity: number().required().positive().integer(),
  currentWeight: number().min(35).required().positive().integer(),
  desiredWeight: number().min(35).required().positive().integer(),
  birthday: date().default(() => new Date()),
});
const initialValues = {
  login: 'Anna Rybachok',
  email: 'annarybachok@gmail.com',
  height: 0,
  currentWeight: 0,
  desiredWeight: 0,
  blood: 0,
  sex: '',
  levelActivity: 0,
  birthday: '05.05.2020',
};

const UserForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    console.log(values.blood);
  };

  return (
    <div>
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
    </div>
  );
};

export default UserForm;
