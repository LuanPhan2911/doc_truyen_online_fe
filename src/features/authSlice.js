import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUserRedux: (state, action) => {
      state.user = action.payload;
    },
    logoutRedux: (state, payload) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserRedux, logoutRedux } = authSlice.actions;

export default authSlice.reducer;
