import { createAsyncThunk } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../auth/operations';
import { toastError } from '../meals/mealsOperations';

const getIndicators = async (_, thunkApi) => {
  try {
    const response = await instance.get(`profiles/targets`);
    return response.data;
  } catch (e) {
    toastError(`Oops! Something was wrong.... ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getIndicatorsThunk = createAsyncThunk('indicators/getIndicators', getIndicators);
