import { createSlice } from "@reduxjs/toolkit";
import like from "../assets/icon_reaction/like.png";
import love from "../assets/icon_reaction/love.png";
import haha from "../assets/icon_reaction/haha.png";
import wow from "../assets/icon_reaction/wow.png";
import sad from "../assets/icon_reaction/sad.png";
import care from "../assets/icon_reaction/care.png";
import angry from "../assets/icon_reaction/angry.png";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    fontSize: 17,
    color: "#000",
    backgroundColor: "#fff",
    fontFamily: "Palatino Linotype",
    colors: [
      {
        id: 1,
        backgroundColor: "#a99d9d",
        color: "#000",
      },
      {
        id: 2,
        backgroundColor: "#a9a28d",
        color: "#000",
      },
      {
        id: 3,
        backgroundColor: "#9ca49c",
        color: "#000",
      },
      {
        id: 4,
        backgroundColor: "#9ba0a0",
        color: "#000",
      },
      {
        id: 5,
        backgroundColor: "#a29d92",
        color: "#000",
      },
      {
        id: 6,
        backgroundColor: "#9e9d9a",
        color: "#000",
      },
      {
        id: 7,
        backgroundColor: "#171717",
        color: "#fff",
      },
      {
        id: 8,
        backgroundColor: "#fff",
        color: "#000",
      },
    ],
    fontsFamily: [
      "Palatino Linotype",
      "Times New Roman",
      "Verdana",
      "Tahoma",
      "Arial",
    ],
    reactions: [
      {
        id: "like",
        name: "Thích",
        font: like,
        count: 0,
      },
      {
        id: "love",
        font: love,
        name: "Yêu thương",
        count: 0,
      },
      {
        id: "haha",
        font: haha,
        name: "Haha",
        count: 0,
      },
      {
        id: "care",
        font: care,
        name: "Quan tâm",
        count: 0,
      },
      {
        id: "wow",
        font: wow,
        name: "Wow",
        count: 0,
      },
      {
        id: "sad",
        font: sad,
        name: "Buồn",
        count: 0,
      },
      {
        id: "angry",
        font: angry,
        name: "Phẫn nộ",
        count: 0,
      },
    ],
    borderColor: [
      "border-primary",
      "border-danger",
      "border-success",
      "border-secondary",
      "border-warning",
      "border-info",
      "border-black",
      "border-dark",
    ],
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
