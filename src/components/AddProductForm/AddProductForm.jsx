import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';
import {
  Container,
  InputsContainer,
  Calories,
  CaloriesValue,
  ButtonsContainer,
  PFPrimaryBtn,
  PFOutlinedBtn,
  ProductInput,
  WeightInput,
  FieldLabel,
  WeightInputLabel,
  ErrorMessageStyled,
} from './AddProductForm.styled';
import { useDispatch } from 'react-redux';
import { postDiaryMealsThunk } from '../../redux/meals/mealsOperations';
// import { ToastContainer } from 'react-toastify';

const AddProductForm = ({ id, title, calories, onClick, onClickSuccess }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const dispatch = useDispatch();

  const initialValues = {
    product_id: id,
    date: format(new Date(), 'yyyy-MM-dd'),
    weight: '',
  };

  const schema = Yup.object().shape({
    weight: Yup.number()
      .max(700, 'Weight should not exceed 700 grams')
      .required('Weight is required')
      .positive('Weight must be above zero'),
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
    onClickSuccess();
    dispatch(postDiaryMealsThunk(values));
    actions.resetForm();

    onClick();
  };

  const handleCloseClick = () => {
    onClick();
  };

  return (
    <>
      {/* <ToastContainer /> */}

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
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
                  <WeightInputLabel htmlFor="weight">
                    <WeightInput
                      name="weight"
                      type="text"
                      onChange={(e) => handleWeightChange(e, setFieldValue)}
                      onKeyPress={(e) => {
                        const onlyDigits = /^[0-9\b]+$/;
                        if (!onlyDigits.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      value={values.weight}
                      border={
                        errors.weight && touched.weight && '1px solid #D80027'
                      }
                    />
                    <FieldLabel>grams</FieldLabel>
                  </WeightInputLabel>
                  <ErrorMessageStyled name="weight" component="p" />
                </div>
              </InputsContainer>

              <Calories>
                Calories: <CaloriesValue>{calculatedCalories}</CaloriesValue>
              </Calories>

              <ButtonsContainer>
                <PFPrimaryBtn type="submit">Add to diary</PFPrimaryBtn>
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
