import React from 'react';
import { Formik } from 'formik';

//    /^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  return (
    <Formik initialValues={initialValues}>
      <form autoComplete="off">
        <label htmlFor="name">
          Name <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Password <input type="text" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </Formik>
  );
};

export default SignUpForm;
