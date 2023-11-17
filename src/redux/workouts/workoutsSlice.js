import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { delDiaryWorkoutThunk, getDiaryWorkoutThunk, addWorkout } from './workoutsOperations';

const workoutsInitialState = {
    isLoading: false,
    error: null,
    workouts: [],
    oneWorkout: null,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arrOfActs = [getDiaryWorkoutThunk, delDiaryWorkoutThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

export const workoutsSlice = createSlice({
    name: 'workouts',
    initialState: workoutsInitialState,
    extraReducers: builder => {
        builder
            .addCase(getDiaryWorkoutThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.workouts = payload;
                state.error = null;
            })
            .addCase(delDiaryWorkoutThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.workouts = state.workouts.filter(workout => workout._id !== payload._id)
                state.error = null;
            })
            .addCase(addWorkout.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.oneWorkout = payload;
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const workoutsReducer = workoutsSlice.reducer;


