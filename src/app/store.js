import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

import authSlice from "../features/user/authSlice";
import appSlice from "../features/app/appSlice";
const reducers = combineReducers({
  authenticate: authSlice,
  app: appSlice,
});
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["authenticate"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
