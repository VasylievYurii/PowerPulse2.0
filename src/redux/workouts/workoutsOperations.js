import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const getDiaryWorkoutThunk = createAsyncThunk(
  'workouts/getWorkouts',
  getWorkouts,
);
export const delDiaryWorkoutThunk = createAsyncThunk(
  'workouts/delWorkout',
  delWorkout,
);

export const addWorkout = createAsyncThunk(
  'workouts/addWorkout',
  async (currentWorkout, thunkAPI) => {
    try {
      const { data } = await instance.post('diaries/workouts', currentWorkout);
      return data;
    } catch (error) {
      toastError(`Oops! Something was wrong... ${error.response.data}`);
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addExercise = createAsyncThunk(
  'addExercise',
  async (exercise, thunkAPI) => {
    console.log('exercise', exercise);
    const {
      date,
      bodyPart,
      target,
      time,
      exerciseId,
      equipment,
      name,
      burnedCalories,
    } = exercise;
    try {
      const response = await axios.post('/diary/addexercise', {
        date,
        bodyPart,
        target,
        time,
        exerciseId,
        equipment,
        name,
        burnedCalories,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
