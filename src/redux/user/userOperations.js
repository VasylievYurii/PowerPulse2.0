import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com/api/';

export const updateAvatar = createAsyncThunk(
  'users/updateAvatar',
  async (file, thunkAPI) => {
    console.log('operat', file);
    try {
      const formData = new FormData();
      formData.append('avatarURL', file);
      console.log('try', formData);
      const res = await axios.patch('/users/avatars', {
        formData,
      });
      console.log(res);
      console.log(res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
