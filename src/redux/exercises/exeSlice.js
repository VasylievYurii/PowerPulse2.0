import { createSlice } from '@reduxjs/toolkit';
import {
  getExercises,
  getExercisesMuscles,
  getExercisesEquipment,
  getExercisesBodyparts,
  getExercisesFilter,
} from './exeOperation';

const InitialState = {
  isLoading: false,
  error: null,
  array: [],
  muscles: [],
  bodyparts: [],
  equipment: [],
  exeFilter: [],
};

const exeSlice = createSlice({
  name: 'exercises',
  initialState: InitialState,
  extraReducers: (builder) =>
    builder
      .addCase(getExercises.fulfilled, (state, action) => {
        state.array = action.payload;
        state.isLoading = false;
      })
      .addCase(getExercisesFilter.fulfilled, (state, action) => {
        state.exeFilter = action.payload;
      })
      .addCase(getExercisesMuscles.fulfilled, (state, action) => {
        state.muscles = action.payload;
        state.isLoading = false;
      })
      .addCase(getExercisesEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(getExercisesBodyparts.fulfilled, (state, action) => {
        state.bodyparts = action.payload;
      }),
});

// const onPending = (state) => {
//   state.isLoading = true;
//   state.error = null;
// };

// const onRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const arrOfActs = [getExercises];

// const addStatusToActs = (status) => arrOfActs.map((el) => el[status]);

// export const exeSlice = createSlice({
//   name: 'exercises',
//   initialState: InitialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getExercises.fulfilled, (state, { payload }) => {
//         state.isLoading = true;
//         state.array = payload;
//         state.error = null;
//       })
//       .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
//       .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
//   },
// });

export const exeReducer = exeSlice.reducer;
