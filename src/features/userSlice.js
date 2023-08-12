import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    name: "",
    avatar: "",
    id: "",
  },
  reducers: {
    userLogin: (state, { payload, type }) => {
      state.isAuth = true;
      state.id = payload.id;
      state.name = payload.name;
      state.avatar = payload.avatar;
    },
    userUpdate: (state, { payload, type }) => {
      state.avatar = payload.avatar;
      state.name = payload.name;
    },
    userLogout: (state, payload) => {
      state.isAuth = false;
      state.name = "";
      state.id = "";
      state.avatar = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout, userUpdate } = userSlice.actions;

export default userSlice.reducer;
