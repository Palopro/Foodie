import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Food } from '../../model/Food';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Reducers } from './reducers';

interface FoodState {
  isLoading: boolean;
  foods: Array<Food>;
}

const initialState: FoodState = {
  isLoading: false,
  foods: [],
};

export const reducerName = Reducers.FoodReducer;

export const foodReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
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
