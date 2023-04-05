import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryCatalog } from '../../libs/utils/api';

interface IGetCatalog {
  shard: string,
  query: string,
}

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryCatalog,
  endpoints: (builder) => ({
    getCatalog: builder.query<any, IGetCatalog>({
      query: ({shard, query}) => '',
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
