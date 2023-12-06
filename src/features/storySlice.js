import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    genres: [],
    genresFilter: [],
    continueRead: [],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setGenresFilter: (state, action) => {
      state.genresFilter = action.payload;
    },
    setContinueRead: (state, action) => {
      state.continueRead = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres, setGenresFilter, setContinueRead } =
  storySlice.actions;

export default storySlice.reducer;
