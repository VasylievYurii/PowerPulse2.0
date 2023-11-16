import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';
import { InputEl } from './AddProductForm.styled';

const AddProductForm = ({ onCloseModal, productData }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  const INITIAL_VALUES = {
    product: productData._id,
    date: format(new Date(), 'dd/MM/yyyy'),
    amount: '',
    calories: 0,
  };

  const schema = Yup.object().shape({
    // product: Yup.string().required(),
    date: Yup.string().required(),
    amount: Yup.number().required().positive(),
    calories: Yup.number().required(),
  });

  const calculateCalories = (weight) => {
    const calculated = (productData.calories * weight) / 100;
    return parseFloat(calculated);
  };

  const handleWeightChange = (event, setFieldValue) => {
    const weight = event.target.value;
    console.log(Number(weight));
    const calories = calculateCalories(weight);
    setCalculatedCalories(calories);
    setFieldValue('amount', Number(weight));
    setFieldValue('calories', calories);
  };

  const hendleSubmit = (values, actions) => {
    console.log(values);
    console.log("Type of 'date':", typeof values.date);
    console.log("Type of 'amount':", typeof values.amount);
    console.log("Type of 'calories':", typeof values.calories);

    // resetForm();
    // onCloseModal();
  };

  const handleCancel = () => {
    //  dispatch(resetForm());

    onCloseModal();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form autoComplete="off">
          <div>
            <label htmlFor="product">
              JSON Data:
              <InputEl
                name="product"
                type="text"
                value={JSON.stringify(productData.title)}
                readOnly
              />
            </label>
          </div>

          <div>
            <label htmlFor="amount">
              Weight:
              <InputEl
                name="amount"
                type="text"
                onChange={(e) => handleWeightChange(e, setFieldValue)}
                onKeyPress={(e) => {
                  const onlyDigits = /^[0-9\b]+$/;
                  if (!onlyDigits.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                value={values.amount}
              />
              <ErrorMessage name="amount" component="p" />
            </label>
          </div>

          <p>Calories: {calculatedCalories}</p>

          <div>
            <button type="submit" onClick={hendleSubmit}>
              Add to diary
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
