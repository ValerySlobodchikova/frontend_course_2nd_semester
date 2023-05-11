import {configureStore} from "@reduxjs/toolkit";
import {authModalSlice} from "./authModalSlice"
import { AuthApi } from './auth';
import {profileInfo} from "./profileInfo";

export const store = configureStore({
    reducer: {
        [authModalSlice.name]: authModalSlice.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [profileInfo.name]: profileInfo.reducer
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([AuthApi.middleware, ]),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch