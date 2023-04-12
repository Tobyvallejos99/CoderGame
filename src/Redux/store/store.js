import { configureStore } from "@reduxjs/toolkit";
import getGameSlice from "../reducer/getGameSlice";

export const store = configureStore({
  reducer: {
    getAll: getGameSlice,
  },
});
