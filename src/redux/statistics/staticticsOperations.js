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

export const getStatistics = createAsyncThunk(
  'statistics/getUserStatistics',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('statistics');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
