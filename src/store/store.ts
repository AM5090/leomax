import { configureStore } from '@reduxjs/toolkit';

import { menuApi } from './rtk/MenuApi';

import { allReducers } from './slices';

export const store = configureStore({
  reducer: {
    ...allReducers,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat([
        menuApi.middleware,
      ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
