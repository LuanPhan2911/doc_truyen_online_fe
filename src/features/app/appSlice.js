import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isShowModal: false,
  },
  reducers: {
    handleCloseModal: (state) => {
      state.isShowModal = false;
    },
    handleShowModal: (state) => {
      state.isShowModal = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleCloseModal, handleShowModal } = appSlice.actions;

export default appSlice.reducer;
