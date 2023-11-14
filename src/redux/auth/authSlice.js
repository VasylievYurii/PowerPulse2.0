import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logOutUser,
  loginUser,
  refreshUser,
  updateAvatar,
} from './operations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  authenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      // -----------Register------------
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      // -----------Login----------
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      // ---------------Log Out------------------
      .addCase(logOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
      })
      // ------------Update Avatar------------
      .addCase(updateAvatar.fulfilled, (state, action) => {
        console.log('Avatar updated:', action.payload);
        state.isLoading = false;
        state.userData.avatarURL = action.payload.avatarURL;
      })
      // ------------Refresh------------------
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = action.payload;
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

export const authReducer = authSlice.reducer;
