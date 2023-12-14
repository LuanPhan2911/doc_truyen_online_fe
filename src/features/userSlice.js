import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    avatar: "",
    id: "",
  },
  reducers: {
    login: (state, { payload, type }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.avatar = payload.avatar;
    },
    update: (state, { payload, type }) => {
      state.avatar = payload.avatar;
      state.name = payload.name;
    },
    logout: (state, payload) => {
      state.name = "";
      state.id = "";
      state.avatar = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;
