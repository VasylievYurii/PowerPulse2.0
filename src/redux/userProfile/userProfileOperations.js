import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (text) => {
  toast.error(text, {
    position: 'top-right',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const instance = axios.create({
  baseURL: 'https://powerpulse-t5-backend.onrender.com/api/',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const getUserProfile = createAsyncThunk(
  'profiles/getUserProfile',
  async (_, thunkApi) => {
    try {
      console.log('getUserProfile');
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      token.set(userToken);
      const { data } = await instance.get('profiles');
      console.log('data getUserProfile:', data);
      return data;
    } catch (error) {
      toastError(
        `Oops! Something was wrong.... ${error.message}. ${error.response.data}`,
      );
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'profiles/updateUserProfile',
  async (newData, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      token.set(userToken);
      console.log('newData 2', newData);
      const { data } = await instance.put('profiles', newData);
      return data;
    } catch (error) {
      toastError(`Oops! Something was wrong.... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
