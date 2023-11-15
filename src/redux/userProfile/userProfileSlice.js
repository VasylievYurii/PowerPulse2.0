import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from './userProfileOperations';

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
        console.log('getUserProfileSlice');
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        console.log('updateUserProfileSlice');
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      ),
});

export const profileReducer = userProfileSlice.reducer;
