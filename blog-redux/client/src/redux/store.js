import { configureStore } from "@reduxjs/toolkit";
import authSlice from './future/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth:authSlice
    },
  });