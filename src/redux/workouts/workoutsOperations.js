import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../auth/operations';
import { toastError, toastSuccess } from '../meals/mealsOperations';

const getWorkouts = async (diaryData, thunkAPI) => {
  try {
    const response = await instance.get(`diaries/workouts/${diaryData}`);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
};

const delWorkout = async (workoutId, thunkAPI) => {
  try {
    const response = await instance.delete(`diaries/workouts/${workoutId}`);
    toastSuccess(`Workout delete successfully`);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getDiaryWorkoutThunk = createAsyncThunk('workouts/getWorkouts', getWorkouts);
export const delDiaryWorkoutThunk = createAsyncThunk('workouts/delWorkout', delWorkout);
