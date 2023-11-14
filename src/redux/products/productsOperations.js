import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { instance } from '../auth/operations';

// axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com/api';

export const getProductsThunk = createAsyncThunk(
  'filters/getProducts',
  async (_, thunkAPI) => {
    try {
      const persistedToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTJhMjlhYzlkMzg0MGM4NGVmMzVhMSIsImNyZWF0ZWRBdCI6IjIwMjMtMTEtMTNUMjI6MjY6MzQuODkyWiIsImlhdCI6MTY5OTkxNjY3MywiZXhwIjoxNzAwMDI0NjczfQ.nVqdyV4cg59bxhaAQ8s22EWTDZvYE9cWyrtVA0ddrnA';
      console.log('persistedToken', persistedToken);

      // Встановлення токену в хедери
      instance.defaults.headers['Authorization'] = `Bearer ${persistedToken}`;

      const { data } = await instance.get(`/products`);
      console.log('data', data);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
