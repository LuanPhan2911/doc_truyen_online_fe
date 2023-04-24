import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    fontSize: 17,
    color: "#000",
    backgroundColor: "#fff",
    fontFamily: "Palatino Linotype",
  },
  reducers: {
    changeFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    changeColor: (state, action) => {
      state.color = action.payload.color;
      state.backgroundColor = action.payload.backgroundColor;
    },
    changeFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor, changeFontSize, changeFontFamily } =
  appSlice.actions;

export default appSlice.reducer;
