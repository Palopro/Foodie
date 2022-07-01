import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Food } from '../../model/Food';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Reducers } from './reducers';

interface FoodState {
  isLoading: boolean;
  foods: Array<Food>;
  favorites: Array<number>;
}

const initialState: FoodState = {
  isLoading: false,
  foods: [],
  favorites: [],
};

export const reducerName = Reducers.FoodReducer;

export const foodReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    handleFavorite: (state, action: PayloadAction<number>) => {
      const favs = state.favorites;
      const favIndex = state.favorites.findIndex(num => num === action.payload);

      if (favIndex === -1) {
        favs.push(action.payload);
      } else {
        favs.splice(favIndex, 1);
      }

      state.favorites = favs;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        foodieApi.endpoints.getFoods.matchPending,
        (state: FoodState) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        foodieApi.endpoints.getFoods.matchFulfilled,
        (state: FoodState, action: PayloadAction<Array<Food>>) => {
          state.isLoading = false;
          state.foods = action.payload;
        },
      )
      .addMatcher(
        foodieApi.endpoints.getFoods.matchRejected,
        (state: FoodState) => {
          state.isLoading = false;
        },
      );
  },
});

export const findFoodByName = (name: string) => (state: FoodState) =>
  state.foods.filter(food =>
    food.name.toLowerCase().includes(name.toLowerCase()),
  );

export const favoriteFoods = (state: FoodState) =>
  state.foods.filter(food => state.favorites.includes(food.id));

export const isInFavorites = (foodId: number) => (state: FoodState) =>
  state.favorites.includes(foodId);
