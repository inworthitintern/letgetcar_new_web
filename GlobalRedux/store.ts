'use client';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counter/counterSlice'
import authReducer from './Features/auth/authSlice'
import homeReducer from './Features/home/homeSlice'
import buyCarModelReducer  from "./Features/buyCarModel/buyCarSlice";
import bannerReducer  from "./Features/banners/bannerSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        home: homeReducer,
        buyCarModel: buyCarModelReducer,
        banner: bannerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
