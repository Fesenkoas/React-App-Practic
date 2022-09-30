import { configureStore } from "@reduxjs/toolkit";
import { getUsersFetch } from "../action/getUsersFetch";
import userSlice from './../redux/userSlice';
import { loggerEnhancer } from './../../miblleWare/thunkEnhancer';
import { logger } from './../../miblleWare/loggerWare';

export const store = configureStore({
    reducer: {
        user:userSlice,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer,logger)
  });