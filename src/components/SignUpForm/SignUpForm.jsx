import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

//    /^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const handleSubmit = (values, actions) => {
    console.log('values', values);
    console.log('actions', actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <label htmlFor="name">
            Name <Field type="text" name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </label>
          <label htmlFor="email">
            Email <Field type="text" name="email" validate={validateEmail} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </label>
          <label htmlFor="password">
            Password <Field type="text" name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
