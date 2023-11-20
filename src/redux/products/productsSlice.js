import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProductsCategories } from './productsOperations';

const initialProductsState = {
  products: [], // перші 15 продуктів
  categories: [],
  isLoading: false,
  error: null,
  total: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProductsCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(getProductsCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductsCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
