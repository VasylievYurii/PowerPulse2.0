import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';
import {
  Container,
  InputsContainer,
  // InputEl,
  Calories,
  CaloriesValue,
  ButtonsContainer,
  PFPrimaryBtn,
  PFOutlinedBtn,
  ProductInput,
  WeightInput,
  FieldLabel,
  WeightInputLabel,
  // WeightInputLabel,
} from './AddProductForm.styled';
import { useDispatch } from 'react-redux';
import { setFormValues } from '../../redux/productForm/productFormSlice';

const AddProductForm = ({ onCloseModal, productData }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  const dispatch = useDispatch();

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
    dispatch(setFormValues(values));

    // onCloseModal();
  };

  const handleCancel = () => {
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
          <Container>
            <InputsContainer>
              <div>
                <label htmlFor="product">
                  <ProductInput
                    name="product"
                    type="text"
                    value={JSON.stringify(productData.title)}
                    readOnly
                  />
                </label>
              </div>

              <div>
                <WeightInputLabel htmlFor="amount">
                  <WeightInput
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
                  <FieldLabel>grams</FieldLabel>
                  <ErrorMessage name="amount" component="p" />
                </WeightInputLabel>
              </div>
            </InputsContainer>

            <Calories>
              Calories: <CaloriesValue>{calculatedCalories}</CaloriesValue>
            </Calories>

            <ButtonsContainer>
              <PFPrimaryBtn type="submit" onClick={hendleSubmit}>
                Add to diary
              </PFPrimaryBtn>
              <PFOutlinedBtn type="button" onClick={handleCancel}>
                Cancel
              </PFOutlinedBtn>
            </ButtonsContainer>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
