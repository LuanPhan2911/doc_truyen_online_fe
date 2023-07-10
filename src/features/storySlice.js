import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    genres: [],
    tags: [],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres, setTags } = storySlice.actions;

export default storySlice.reducer;
