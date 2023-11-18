import { createSlice } from '@reduxjs/toolkit';
import { getUserDayTargets } from './targetsOperations';

const initialState = {
  profile: null,
  targets: {},
  isLoading: false,
  error: null,
};

const targetsSlice = createSlice({
  name: 'targets',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getUserDayTargets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(getUserDayTargets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDayTargets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const targetsReducer = targetsSlice.reducer;
