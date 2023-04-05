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
    getMenu: builder.query<IMenuItem[], void>({
      query: () => '/data/main-menu-ru-ru-v2.json',
    }),
    // getCatalog: builder.query<any, IGetCatalog>({
    //   query: ({shard, query}) => {
    //     return `/${shard}/catalog?${query}&curr=rub&dest=-1257786&regions=80,64,38,4,115&sort=popular&spp=0`;
    //   },
    // }),
  }),
});

export const { useGetMenuQuery } = menuApi;

// https://catalog.wb.ru/catalog/bathroom1/catalog?cat=260&curr=rub&dest=-1257786&regions=80,64,38,
// 4,115,83,33,68,70,69,30,86,75,40,1,66,48,110,22,31,71,114,111&sort=popular&spp=0