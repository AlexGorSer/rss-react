import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IInfo } from '../../components/Main/IMain';

export const dataAPI = createApi({
  reducerPath: 'RickAndMorty',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  endpoints: (build) => ({
    getCardsByName: build.query<IInfo, string>({
      query: (name = '') => `?name=${name}`,
    }),
  }),
});

export const { useLazyGetCardsByNameQuery } = dataAPI;
