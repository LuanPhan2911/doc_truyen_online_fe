import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    genres: [],
    genresFilter: [],
    views: [
      {
        view: "Góc nhìn nam",
        id: 1,
      },
      {
        view: "Góc nhìn nữ",
        id: 2,
      },
      {
        view: "Ngôi thứ nhất",
        id: 3,
      },
    ],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setGenresFilter: (state, action) => {
      state.genresFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres, setGenresFilter, getView } = storySlice.actions;

export default storySlice.reducer;
