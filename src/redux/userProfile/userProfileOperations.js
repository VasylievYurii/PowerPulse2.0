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
  'profile/getUserProfile',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      if (userToken) {
        token.set(userToken);
        const { data } = await instance.get('profiles');
        return data;
      }
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (newData, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      token.set(userToken);
      const { data } = await instance.put('profiles', newData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getTarget = createAsyncThunk(
  'profile/getTarget',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      token.set(userToken);
      const { data } = await instance.get('profiles/targets');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
