import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../auth/operations';

const options = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const toastError = (text) => {
  toast.error(text, options);
};

const toastSuccess = (text) => {
  toast.success(text, options);
};

const getDiary = async (diaryData, thunkAPI) => {
  try {
    const response = await instance.get(`diaries/${diaryData}`);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
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

export const getDiaryThunk = createAsyncThunk('diary/getMeals', getDiary);
export const getDiaryMealsThunk = createAsyncThunk('diary/getMeals', getMeals);
export const delDiaryMealsThunk = createAsyncThunk('diary/delMeal', delMeal);
