import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // productData: null,
  // calculatedCalories: 0,
  formValues: {
    product: '',
    date: '',
    amount: 0,
    calories: 0,
  },
};

const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    // setProductData(state, action) {
    //   state.productData = action.payload;
    // },
    // setCalculatedCalories(state, action) {
    //   state.calculatedCalories = action.payload;
    // },
    setFormValues(state, action) {
      state.formValues = action.payload;
    },
    // resetForm(state) {
    //   state.formValues = initialState.formValues;
    //   state.calculatedCalories = initialState.calculatedCalories;
    // },
  },
});

export const {
  // setProductData,
  // setCalculatedCalories,
  setFormValues,
  resetForm,
} = productFormSlice.actions;

export const productFormReducer = productFormSlice.reducer;
