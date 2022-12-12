import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    handleLoginRedux: (state, action) => {
      state.token = action.payload;
    },
    handleLogoutRedux: (state, action) => {
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLoginRedux, handleLogoutRedux } = authSlice.actions;

export default authSlice.reducer;
