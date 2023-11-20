import { createSlice } from '@reduxjs/toolkit';
import { options } from './filtersConstants';

const filtersInitialState = {
  query: '',
  category: { value: 'all', label: 'All categories' },
  recommended: options[0],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    updateQueryFilter(state, action) {
      state.query = action.payload;
    },
    updateCategoryFilter(state, action) {
      state.category = action.payload;
    },
    updateRecommendedFilter(state, action) {
      state.recommended = action.payload;
    },
  },
});

export const {
  updateQueryFilter,
  updateCategoryFilter,
  updateRecommendedFilter,
} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
