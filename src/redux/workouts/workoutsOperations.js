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
      const response = await axios.post('/diaries/addexercise', {
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
