import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com/api/';

export async function getAllProducts() {
  const { data } = await axios.get('/products');
  //   console.log('/products ===>', data);
  // При успішному запиті повертаємо проміс із даними
  return data;
}

// console.log(getAllProducts());

export async function getProductByCategories() {
  const { data } = await axios.get('/products/categories');
  //   console.log('products/categories ===>', data);
  return data;
}
// console.log(getProductByCategories());

// -----------F E T C H === A P I================

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, { rejectWithValue }) => {
    try {
      const allProducts = await getAllProducts();

      return allProducts;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchProductsByCategories = createAsyncThunk(
  'products/fetchProductsByCategories',

  async (_, { rejectWithValue }) => {
    try {
      const productsByCategories = await getProductByCategories;

      return productsByCategories;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);
