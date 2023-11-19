import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { postDiaryMealsThunk } from '../../redux/meals/mealsOperations';
import { selectIsMealAdd } from '../../redux/selectors';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import { ToastContainer } from 'react-toastify';

const AddProductForm = ({ id, title, calories, onClick }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const isMealAdd = useSelector(selectIsMealAdd);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isMealAdd) {
      toggleModal();
    }
  }, [isMealAdd]);

  const closeAllModal = () => {
    onClick();
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  const initialValues = {
    product_id: id,
    date: format(new Date(), 'yyyy-MM-dd'),
    weight: '',
    calories: 0,
  };

  const schema = Yup.object().shape({
    product_id: Yup.string().required(),
    date: Yup.string().required(),
    weight: Yup.number().required().positive(),
    calories: Yup.number().required(),
  });

  const calculateCalories = (amount) => {
    const calculated = (calories * amount) / 100;
    return parseFloat(calculated);
  };

  const handleWeightChange = (event, setFieldValue) => {
    const amount = event.target.value;
    const calories = calculateCalories(amount);
    setCalculatedCalories(calories);
    setFieldValue('weight', Number(amount));
    setFieldValue('calories', calories);
  };

  const handleSubmit = (values, actions) => {
    dispatch(postDiaryMealsThunk(values));
    actions.resetForm();
    setCalculatedCalories(0);
  };

  const handleCloseClick = () => {
    onClick();
  };

  return (
    <>
      <ToastContainer />
      {showModal && (
        <BasicModalWindow onClick={toggleModal}>
          <AddProductSuccess
            closeAllModal={closeAllModal}
            calories={calculatedCalories}
            onClick={toggleModal}
          />
        </BasicModalWindow>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
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
                      value={title}
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
                      value={values.weight}
                    />
                    <FieldLabel>grams</FieldLabel>
                    <ErrorMessage name="weight" component="p" />
                  </WeightInputLabel>
                </div>
              </InputsContainer>

              <Calories>
                Calories: <CaloriesValue>{calculatedCalories}</CaloriesValue>
              </Calories>

              <ButtonsContainer>
                <PFPrimaryBtn
                  type="submit"
                  // onClick={handleSubmit}
                >
                  Add to diary
                </PFPrimaryBtn>
                <PFOutlinedBtn type="button" onClick={handleCloseClick}>
                  Cancel
                </PFOutlinedBtn>
              </ButtonsContainer>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddProductForm;
