import { createSlice } from '@reduxjs/toolkit';
import { updateAvatar } from './userOperations';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    avatarURL: '',
  },
  extraReducers: (builder) =>
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      console.log('avatar');
      state.avatarURL = action.payload;
    }),
});

export const userReducer = userSlice.reducer;
