import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices";

export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer,
});
