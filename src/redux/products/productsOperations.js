import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { instance } from '../auth/operations';

// axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (
    _,
    // { recommended = '', categoryId = '', query = '', page, limit },
    thunkAPI,
  ) => {
    try {
      const { data } = await instance.get(
        `products`,
        // `products?recommended=${recommended}&categoryId=${categoryId}&query=${query}&page=${page}&limit=${limit}`,
      );
      console.log('data getProducts', data);
      return data;
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
      // console.log('categories', data);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
