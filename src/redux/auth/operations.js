import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (text) => {
    toast.error(text, {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
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
            toastError(`Oops! Something was wrog.... ${error.message}`);
            return thunkApi.rejectWithValue(error.message);
        }
    },
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (dataUser, thunkApi) => {
        try {
            console.log(dataUser);
            const { data } = await instance.post('auth/login', dataUser);
            token.set(data.token);

            return data;
        } catch (error) {
            toastError(`Oops! Something was wrog.... ${error.message}`);
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
            console.log('Yupiiii!!! You are logout!!');
            return;
        } catch (error) {
            toastError(`Oops! Something was wrog.... ${error.message}`);
            return thunkApi.rejectWithValue(error.message);
        }
    },
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkApi) => {
        try {
            const state = thunkApi.getState();
            // console.log('state', state)
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
