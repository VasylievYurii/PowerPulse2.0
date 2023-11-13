import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from "../auth/operations";

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

const getMeals = async (diaryData, thunkAPI) => {
    try {
        console.log('diaryData ->', diaryData);
        // const searchData = {
        //     date: diaryData
        // };
        // console.log('searchData ->', searchData);

        const response = await instance.get('dairys/meals', diaryData);

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
        console.log(mealId);
                const response = await instance.delete(`dairys/meals`, mealId);

        toastSuccess(`Meal delete successfully`);
        console.log(response);
return response.data;
    }
    catch (e) {
        console.log(e.message);
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