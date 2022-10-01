import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  totalCount: null,
  status: "",
  profile: {},
  followed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload.items;
      state.totalCount = action.payload.totalCount;
    },
    getProfile(state, action) {
      state.loading = action.payload.loading;
      state.profile = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
    getFollowed(state, action) {
      state.followed = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { getUsers, getProfile, loading, getFollowed } = userSlice.actions;
