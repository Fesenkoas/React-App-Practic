import { configureStore } from "@reduxjs/toolkit";
import { githubAPI } from "./github/github.api";

export const store = configureStore({
  reducer: {
    [githubAPI.reducerPath]: githubAPI.reducer,
  },
});
