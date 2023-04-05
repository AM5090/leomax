import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryCatalog } from '../../libs/utils/api';

interface IGetCatalog {
  category: string,
}

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryCatalog,
  endpoints: (builder) => ({
    getCatalog: builder.query<any, (string | null)>({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
