import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from './userProfileOperations';
import { getUserDayTargets } from '../targets/targetsOperations';

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const userProfileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(getUserDayTargets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.target = action.payload;
        state.error = false;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const profileReducer = userProfileSlice.reducer;
