import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres } = storySlice.actions;

export default storySlice.reducer;
