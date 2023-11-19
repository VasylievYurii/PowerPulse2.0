import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './staticticsOperations';

const initialState = {
  isLoading: false,
  error: null,
  statistics: {
    videoCount: '350+',
    burnedCaloriesSum: 500,
  },
};

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getStatistics.fulfilled, (state, action) => {
                state.isLoading = false;
                state.statistics = action.payload;
                state.error = null;
            })
            .addCase(getStatistics.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getStatistics.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const statReducer = statisticsSlice.reducer;