import { configureStore } from "@reduxjs/toolkit";
import authSlice from './future/auth/authSlice'
import  postSlice  from './future/post/postSlise';

export const store = configureStore({
    reducer: {
        auth:authSlice,
        post:postSlice
    },
  });