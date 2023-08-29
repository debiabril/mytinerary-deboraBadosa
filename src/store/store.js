import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers.js";


export const store =  configureStore({
    reducer: {
        userReducer: userReducer
    },
})