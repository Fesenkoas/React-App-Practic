import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  posts: [],
  popularPosts: [],
  isLogin: false,
};

export const createPost = createAsyncThunk(
  "post/createPost",
  async (params) => {
    try {
      const { data } = await axios.post("/posts", params);
      return data;
    } catch (error) {
        console.log(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.isLogin = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.isLogin = false;
      state.posts.push(action.payload)
    },
    [createPost.rejected]: (state) => {
      state.isLogin = false;
    },
  },
});

export default postSlice.reducer;
