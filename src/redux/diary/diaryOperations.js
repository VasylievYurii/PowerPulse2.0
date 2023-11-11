import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
};

const toastError = (text) => {
    toast.error(text, options);
};

const toastSuccess = (text) => {
    toast.success(text, options);
};

axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com';

const getMeals = async (diaryData, thunkAPI) => {
    try {
        const response = await axios.get('/api/meals', diaryData);
        console.log(response);
return response.data;
    }
    catch (e) {
        console.log(e.message);
toastError(`Oops! Something was wrong.... ${e.message}`);
        return thunkAPI.rejectWithValue(e.message);
    }
};

const delMeal = async (mealId, thunkAPI) => {
    try {
        const response = await axios.delete(`/api/meals/${mealId}`);
        toastSuccess(`Meal delete successfully`);
return response.data;
    }
    catch (e) {
            toastError(`Oops! Something was wrong.... ${e.message}`);
        return thunkAPI.rejectWithValue(e.message);
    }
};


export const getDiaryMealsThunk = createAsyncThunk(
    'diary/getMeals',
    getMeals
);

export const delDiaryMealsThunk = createAsyncThunk(
    'diary/delMeal',
    delMeal
);