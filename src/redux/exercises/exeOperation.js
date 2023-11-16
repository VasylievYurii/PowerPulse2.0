import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance, token } from '../auth/operations';
// import axios from 'axios';

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

// const toastSuccess = (text) => {
//   toast.success(text, options);
// };

// export const instance = axios.create({
//   baseURL: 'https://powerpulse-t5-backend.onrender.com/api/',
// });

// export const token = {
//   set: (token) => {
//     instance.defaults.headers['Authorization'] = `Bearer ${token}`;
//   },
//   clear: () => {
//     instance.defaults.headers['Authorization'] = '';
//   },
// };

export const getExercises = createAsyncThunk(
  'exercises/getExercises',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);

      const response = await instance.get('/exercises');

      return response.data;
    } catch (e) {
      console.log(e.message);
      toastError(`Oops! Something was wrong.... ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getExercisesFilter = createAsyncThunk(
  'exercises/getExercisesFilter',
  async (paramsExe, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);

      const response = await instance.get(
        `/exercises?filter=${paramsExe.filter}&name=${paramsExe.name}`,
      );
      return response.data;
    } catch (e) {
      console.log(e.message);
      toastError(`Oops! Something was wrong.... ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getExercisesMuscles = createAsyncThunk(
  'exercises/getExercisesMuscles',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);

      const response = await instance.get('/exercises/groups/muscles');
      return response.data;
    } catch (e) {
      console.log(e.message);
      toastError(`Oops! Something was wrong.... ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getExercisesEquipment = createAsyncThunk(
  'exercises/getExercisesEquipment',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);
      const response = await instance.get('/exercises/groups/equipment');
      return response.data;
    } catch (e) {
      console.log(e.message);
      toastError(`Oops! Something was wrong.... ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getExercisesBodyparts = createAsyncThunk(
  'exercises/getExercisesBodyparts',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);
      const response = await instance.get('/exercises/groups/bodyparts');
      return response.data;
    } catch (e) {
      console.log(e.message);
      toastError(`Oops! Something was wrong.... ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
