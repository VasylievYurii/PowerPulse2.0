import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (text) => {
  toast.error(text, {
    position: 'top-right',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const instance = axios.create({
  baseURL: 'https://powerpulse-t5-backend.onrender.com/api/',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await instance.post('auth/register', dataUser);
      token.set(data.token);

      return data;
    } catch (error) {
      toastError(
        `Oops! Something was wrong.... ${error.message}. ${error.response.data}`,
      );
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await instance.post('auth/login', dataUser);
      token.set(data.token);

      return data;
    } catch (error) {
      toastError(
        `Oops! Something was wrong.... ${error.message}. ${error.response.data}`,
      );
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkApi) => {
    try {
      await instance.post('auth/logout');
      token.clear();

      return;
    } catch (error) {
      toastError(`Oops! Something was wrong.... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();

      const userToken = state.auth.token;
      token.set(userToken);
      const { data } = await instance.get('auth/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const token = state.auth.token;
      if (!token) {
        return false;
      }
    },
  },
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (newData, thunkApi) => {
    try {
      console.log('newData', newData);
      const res = await instance.patch('users', newData);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (file, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const res = await instance.patch('users/avatars', formData);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }

  },

);


// export const getUserParams = createAsyncThunk(
//   'auth/getparams',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       const res = await axios.get('/api/auth/getuser');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
