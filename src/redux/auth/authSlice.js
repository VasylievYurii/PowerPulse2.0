import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logOutUser,
  loginUser,
  refreshUser,
  updateUser,
  updateAvatar,
} from './operations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  authenticated: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
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
        state.error = null;
      })
      // -----------Login----------
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
        state.isLoggedIn = true;
        state.error = null;
      })
      // ---------------Log Out------------------
      // .addCase(logOutUser.pending, (state) => {
      //   state.isLoggedIn = false;
      //   state.isLoading = true;
      //   state.authenticated = false;
      //   state.userData = null;
      //   state.token = null;
      //   state.error = null;
      // })
      .addCase(logOutUser.fulfilled, (state) => {
        console.log('logout finished');
        state.isLoggedIn = false;
        state.isLoading = false;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
        state.error = null;
      })
      // ------------Update User------------
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      // ------------Update Avatar------------
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.avatarURL = action.payload.avatarURL;
        state.isRefreshing = false;
        state.error = null;
      })
      // ------------Refresh------------------
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, (state) => {
        console.log('refresh user pending');
        state.isRefreshing = true;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith('pending') && action.type.startsWith('auth'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) =>
          action.type.endsWith('rejected') && action.type.startsWith('auth'),
        (state, action) => {
          state.isLoading = false;
          state.isRefreshing = false;
          state.error = action.payload;
        },
      ),
});

export const authReducer = authSlice.reducer;
