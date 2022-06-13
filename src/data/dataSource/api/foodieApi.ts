import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../../../domain/model/user';
import { FoodDTO } from './dto/FoodDTO';
import { Food } from '../../../domain/model/Food';
import { CategoryDTO } from './dto/CategoryDTO';
import { UserDTO } from './dto/UserDTO';
import { Category } from '../../../domain/model/Category';
import { RegisterUserCredentials, LoginUserCredentials } from './types';

const baseUrl = 'https://rn-food-delivery.herokuapp.com/api';

const mapToUser = (userDTO: UserDTO) =>
  new User(userDTO.id, userDTO.username, userDTO.email);

const mapToCategory = (categoryDTO: CategoryDTO) =>
  new Category(categoryDTO.id, categoryDTO.attributes.name);

const mapToFood = (foodDTO: FoodDTO) =>
  new Food(
    foodDTO.id,
    foodDTO.attributes.name,
    foodDTO.attributes.price,
    foodDTO.attributes.photo,
    foodDTO.attributes.categories.data.map((cat: CategoryDTO) => cat.id),
  );

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
    login: build.mutation<{ jwt: string; user: User }, LoginUserCredentials>({
      query: ({ identifier, password }) => ({
        url: '/auth/local',
        method: 'POST',
        body: {
          identifier: identifier,
          password: password,
        },
      }),
      transformResponse: async (response: { user: UserDTO; jwt: string }) => {
        await AsyncStorage.setItem('jwt', response.jwt);
        const user: User = mapToUser(response.user);
        return { user, jwt: response.jwt };
      },
    }),
    register: build.mutation<{ user: User }, RegisterUserCredentials>({
      query: ({ username, email, password }) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: {
          username: username,
          email: email,
          password: password,
        },
      }),
      transformResponse: (response: { data: { user: UserDTO } }) => {
        const user: User = mapToUser(response.data.user);
        return {
          user: user,
        };
      },
    }),
    getCategories: build.query<Array<Category>, void>({
      query: () => ({
        url: '/categories',
        params: {
          populate: '*',
        },
      }),
      transformResponse: (response: { data: Array<CategoryDTO> }) =>
        response.data.map(mapToCategory),
    }),
    getFoods: build.query<Array<Food>, void>({
      query: () => ({
        url: '/foods',
        params: {
          populate: '*',
        },
      }),
      transformResponse: (response: { data: Array<FoodDTO> }) =>
        response.data.map(mapToFood),
    }),
  }),
});
