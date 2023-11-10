import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations";

const initialState = {
    userData: null,
    token: null,
    isLoading: false,
    authenticated: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            // -----------Register------------
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.token = action.payload.token;
                state.userData = action.payload.user;
            })
            .addMatcher(
                action => action.type.endsWith('/pending'),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),
});

export const authReducer = authSlice.reducer;