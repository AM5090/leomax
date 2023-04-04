import { configureStore } from "@reduxjs/toolkit";
import { allReducers } from "./slices";

export const store = configureStore({
  reducer: {
    ...allReducers
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
