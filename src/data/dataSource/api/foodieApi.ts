import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../../../domain/model/user';
import { UserDTO, UserJSON } from './dto/UserDTO';

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
      transformResponse: async (response: { user: UserJSON; jwt: string }) => {
        await AsyncStorage.setItem('jwt', response.jwt);
        const user: User = UserDTO.parseFromJSON(response.user);
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
      transformResponse: (response: { data: { user: UserJSON } }) => {
        const user: User = UserDTO.parseFromJSON(response.data.user);

        return {
          user: user,
        };
      },
    }),
  }),
});
