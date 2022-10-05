import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
   ilLogin:false,
  };
  
  const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{}
  })
export default loginSlice.reducer;