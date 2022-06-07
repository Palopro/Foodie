import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../../../domain/model/user';
import { UserEntity } from './entity/UserEntity';
import { FoodDTO } from './entity/FoodDTO';
import { Food } from '../../../domain/model/Food';
import { CategoryDTO } from './entity/CategoryDTO';

const baseUrl = 'https://rn-food-delivery.herokuapp.com/api';

export const foodieApi = createApi({
  reducerPath: 'FoodieApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async headers => {
      const token = await AsyncStorage.getItem('jwt');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['FoodieApi'],
  endpoints: build => ({
    login: build.mutation<
    { jwt: string; user: User },
    { userCredentials: { identifier: string; password: string } }
    >({
      query: ({ userCredentials }) => ({
        url: '/auth/local',
        method: 'POST',
        body: {
          identifier: userCredentials.identifier,
          password: userCredentials.password,
        },
        headers: undefined,
      }),
      transformResponse: async (response: {
        user: UserEntity;
        jwt: string;
      }) => {
        await AsyncStorage.setItem('jwt', response.jwt);
        const user: User = UserEntity.parseFromSJON(response.user);
        return { user, jwt: response.jwt };
      },
    }),
    register: build.mutation<
      { user: User },
      { userCredentials: { username: string; email: string; password: string } }
    >({
      query: ({ userCredentials }) => ({
        url: '/auth/local/register',
        method: 'POST',
        headers: undefined,
        body: {
          username: userCredentials.username,
          email: userCredentials.email,
          password: userCredentials.password,
        },
      }),
      transformResponse: (response: { data: { user: UserEntity } }) => {
        const user: User = UserEntity.parseFromSJON(response.data.user);

        return {
          user: user,
        };
      },
    }),
    getCategories: build.query<Array<any>, undefined>({
      query: () => ({
        url: '/categories?populate=*',
      }),
      transformResponse: (response: { data: any }) =>
        response.data.map(CategoryDTO.parseFromJSON),
    }),
    getFoods: build.query<Array<Food>, undefined>({
      query: () => ({
        url: '/foods?populate=*',
      }),
      transformResponse: (response: { data: Array<FoodDTO> }) =>
        response.data.map(FoodDTO.parseFromJSON),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = foodieApi;
