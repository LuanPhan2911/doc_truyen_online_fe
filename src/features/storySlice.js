import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    genres: [],
    tagsFilter: [],
    continueRead: [],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setTagsFilter: (state, action) => {
      state.tagsFilter = action.payload;
    },
    setContinueRead: (state, action) => {
      state.continueRead = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres, setTagsFilter, setContinueRead } = storySlice.actions;

export default storySlice.reducer;
