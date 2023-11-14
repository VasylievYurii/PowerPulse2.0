import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { delDiaryWorkoutThunk, getDiaryThunk } from './diaryOperations';

const diaryInitialState = {
    isLoading: false,
    error: null,
    meals: [],
    diaryMealsExercise: {}
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arrOfActs = [getDiaryThunk, delDiaryWorkoutThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

export const diarySlice = createSlice({
    name: 'diary',
    initialState: diaryInitialState,
    extraReducers: builder => {
        builder
            .addCase(getDiaryThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.diaryMealsExercise = payload;
                state.error = null;
            })
            .addCase(delDiaryWorkoutThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.diaryMealsExercise.workouts = state.diaryMealsExercise.workouts.filter(workout => workout._id !== payload._id)
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const diaryReducer = diarySlice.reducer;


