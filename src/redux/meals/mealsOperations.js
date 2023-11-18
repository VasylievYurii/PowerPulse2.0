import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../auth/operations';

const options = {
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const toastError = (text) => {
  toast.error(text, options);
};

export const toastSuccess = (text) => {
  toast.success(text, options);
};

const getMeals = async (diaryData, thunkAPI) => {
  try {
    const response = await instance.get(`diaries/meals/${diaryData}`);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
};

const delMeal = async (mealId, thunkAPI) => {
  try {
    const response = await instance.delete(`diaries/meals/${mealId}`);
    toastSuccess(`Meal delete successfully`);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
};

const postMeal = async (currentProduct, thunkAPI) => {
  try {
    const response = await instance.post(`diaries/meals`, currentProduct);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getDiaryMealsThunk = createAsyncThunk('meals/getMeals', getMeals);
export const delDiaryMealsThunk = createAsyncThunk('meals/delMeal', delMeal);
export const postDiaryMealsThunk = createAsyncThunk('meals/postMeal', postMeal);

