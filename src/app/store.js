import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

import userSlice from "../features/userSlice";
import appSlice from "../features/appSlice";
import storySlice from "../features/storySlice";
import authSlice from "../features/authSlice";
const reducers = combineReducers({
  user: userSlice,
  app: appSlice,
  story: storySlice,
  auth: authSlice,
});
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["app", "story"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
