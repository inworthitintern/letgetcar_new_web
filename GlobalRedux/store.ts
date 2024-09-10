'use client';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counter/counterSlice'
import authReducer from './Features/auth/authSlice'
import homeReducer from './Features/home/homeSlice'
import buyCarModelReducer  from "./Features/buyCarModel/buyCarSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        home: homeReducer,
        buyCarModel: buyCarModelReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
