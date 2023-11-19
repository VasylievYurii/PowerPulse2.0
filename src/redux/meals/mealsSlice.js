import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { delDiaryMealsThunk, getDiaryMealsThunk, postDiaryMealsThunk } from './mealsOperations';

const mealInitialState = {
    isLoading: false,
    error: null,
    meals: [],
    isMealAdd: false,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
    state.isMealAdd = false;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    state.isMealAdd = false;
};

const arrOfActs = [getDiaryMealsThunk, delDiaryMealsThunk, postDiaryMealsThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

export const diarySlice = createSlice({
    name: 'meals',
    initialState: mealInitialState,
    extraReducers: builder => {
        builder
            .addCase(getDiaryMealsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.meals = payload;
                state.error = null;
            })
            .addCase(delDiaryMealsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.meals = state.meals.filter(meal => meal._id !== payload._id);
                state.error = null;
            })
            .addCase(postDiaryMealsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.isMealAdd = true;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const mealsReducer = diarySlice.reducer;


