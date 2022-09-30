import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  totalCount: null,
  status: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload.items;
      state.totalCount = action.payload.totalCount;
    },
  },
});

export default userSlice.reducer;
export const { getUsers } = userSlice.actions
