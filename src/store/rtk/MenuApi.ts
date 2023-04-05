import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '../../libs/utils/api';

import { IMenuItem } from './menuInterface';

interface IGetCatalog {
  shard: string,
  query: string,
}

export const menuApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    getMenu: builder.query<string[], void>({
      query: () => '/products/categories', //  /data/main-menu-ru-ru-v2.json
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
