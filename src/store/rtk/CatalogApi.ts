import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryCatalog } from '../../libs/utils/api';

interface IGetCatalog {
  category: string,
}

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryCatalog,
  endpoints: (builder) => ({
    getCatalog: builder.query<any, void>({
      query: () => ({
        url: '/products/category/electronics',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
