import { createSlice } from '@reduxjs/toolkit';
import { getIndicatorsThunk } from './userIndicOperations';

const initialIndState = {
  indicators: {},
  isLoading: false,
  error: null,
};

export const userIndicSlice = createSlice({
    name: 'filter',
    initialState: initialIndState,
    extraReducers: (builder) =>
        builder
            .addCase(getIndicatorsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getIndicatorsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.indicators = payload;
                state.error = null;
            })

            .addCase(getIndicatorsThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
});

export const indicatorsReducer = userIndicSlice.reducer;
