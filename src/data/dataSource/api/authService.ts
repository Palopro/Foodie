import { User } from '../../../domain/model/user';
import { UserEntity } from './entity/UserEntity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://rn-food-delivery.herokuapp.com/api';

export const foodieApi = createApi({
  reducerPath: 'FoodieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = foodieApi;
