import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

import { BASE_API_CATALOG, BASE_API_MENU_URL } from '../../shared/consts/api';


export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_MENU_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
  },
});

export const baseQueryCatalog = fetchBaseQuery({
  baseUrl: BASE_API_CATALOG,
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
  },
});