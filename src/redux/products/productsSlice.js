import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsThunk,
  // fetchProductsByCategories,
} from './productsOperations';

const initialProductsState = {
  products: [], // перші 15 продуктів
  categories: [],
  isLoading: false,
  error: null,
};

const productsFilterSlice = createSlice({
  name: 'filters',
  initialState: initialProductsState,

  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.categories = action.payload;
    // })
    // .addCase(fetchProductsByCategories.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(fetchProductsByCategories.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const productsReducer = productsFilterSlice.reducer;
export const productReducer = productsFilterSlice.actions.setFilterProducts;
