import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { instance } from '../auth/operations';

// axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ recommended, category, query }, thunkAPI) => {
    try {
      const queryParams = [];

      if (recommended && recommended !== 'all') {
        queryParams.push(`recommended=${recommended}`);
      }

      if (category && category !== 'all') {
        queryParams.push(`category_id=${category}`);
      }

      if (query && query.trim() !== '') {
        queryParams.push(`query=${query}`);
      }

      const queryString = queryParams.join('&');
      const url = `products?${queryString}&page=1&limit=20`;
      console.log(url);

      const { data } = await instance.get(url);
      console.log('data', data.data);
      return data.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getProductsCategories = createAsyncThunk(
  'products/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`products/categories`);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
