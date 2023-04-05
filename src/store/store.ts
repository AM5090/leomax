import { configureStore } from '@reduxjs/toolkit';

import { catalogApi } from './rtk/CatalogApi';
import { menuApi } from './rtk/MenuApi';
import { allReducers } from './slices';

export const store = configureStore({
  reducer: {
    ...allReducers,
    [menuApi.reducerPath]: menuApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat([
        menuApi.middleware,
        catalogApi.middleware,
      ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
