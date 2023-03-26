import {configureStore} from "@reduxjs/toolkit";
import {authModalSlice} from "./authModalSlice"

export const store = configureStore({
    reducer: {
        [authModalSlice.name]: authModalSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch