import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    name: "",
    avatar: "",
  },
  reducers: {
    userLogin: (state, action) => {
      state.isAuth = true;
    },
    userLogout: (state, payload) => {
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
