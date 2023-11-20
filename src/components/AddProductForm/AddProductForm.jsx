import { useState } from 'react';
import { Formik, Form } from 'formik';
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
  ErrorMessageStyled,
  // WeightInputLabel,
} from './AddProductForm.styled';
import { useDispatch } from 'react-redux';
import { postDiaryMealsThunk } from '../../redux/meals/mealsOperations';
import { ToastContainer } from 'react-toastify';

const AddProductForm = ({ id, title, calories, onClick, onClickSuccess }) => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   if (isMealAdd) {
  //     toggleModal();
  //   }
  // }, [isMealAdd]);

  // const closeAllModal = () => {
  //   onClick();
  // };

  // const toggleModal = () => {
  //   setShowModal((prevState) => !prevState);
  // };

  const dispatch = useDispatch();

  const initialValues = {
    product_id: id,
    date: format(new Date(), 'yyyy-MM-dd'),
    weight: '',
    // calories: 0,
  };

  const schema = Yup.object().shape({
    // product_id: Yup.string().required(),
    // date: Yup.string().required(),
    weight: Yup.number()
      .max(700, 'Weight should be no more than 700 grams')
      .required()
      .positive(),
    // calories: Yup.number().required(),
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
      <ToastContainer />

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
                    />
                    <FieldLabel>grams</FieldLabel>
                    <ErrorMessageStyled name="weight" component="p" />
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
