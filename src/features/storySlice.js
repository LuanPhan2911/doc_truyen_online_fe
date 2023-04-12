import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres: (state, action) => {
      console.log(action.payload);
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres } = storySlice.actions;

export default storySlice.reducer;
