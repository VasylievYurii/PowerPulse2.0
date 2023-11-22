import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

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
      const url = `products?${queryString}&page=1&limit=60`;

      const { data } = await instance.get(url);
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
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
