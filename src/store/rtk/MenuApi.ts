import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '../../libs/utils/api';

import { IMenuItem } from './menuInterface';


export const menuApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    getMenu: builder.query<IMenuItem[], void>({
      query: () => '/data/main-menu-ru-ru-v2.json',
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;