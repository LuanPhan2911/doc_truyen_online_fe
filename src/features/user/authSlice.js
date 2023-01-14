import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    handleLoginRedux: (state, action) => {
      // debugger;
      state.isAuth = true;
    },
    handleLogoutRedux: (state, action) => {
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLoginRedux, handleLogoutRedux } = authSlice.actions;

export default authSlice.reducer;
