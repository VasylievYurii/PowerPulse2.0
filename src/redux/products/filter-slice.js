import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllProducts,
  fetchProductsByCategories,
} from '../../redux/products/filter-operations';

const initialFilterState = {
  allProducts: [],
  categories: [
    'alcoholic drinks',
    'berries',
    'cereals',
    'dairy',
    'dried fruits',
    'eggs',
    'fish',
    'flour',
    'fruits',
    'meat',
  ],
  filter: {
    search: '',
    category: '',
    recommended: '',
  },
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setFilterProducts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allProducts = action.payload;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchProductsByCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const roductsReducer = filterSlice.reducer;
export const filterReducer = filterSlice.actions.setFilterProducts;
