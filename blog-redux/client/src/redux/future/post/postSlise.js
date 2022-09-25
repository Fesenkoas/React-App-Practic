import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isLogin: false,
    status: null,
  };

  export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{}
  })

  export default postSlice.reducer;