import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartFood } from '../../model/CartFood';
import { Reducers } from './reducers';

interface FoodCartState {
  cart: Array<CartFood>;
}

const initialState: FoodCartState = {
  cart: [],
};

export const reducerName = Reducers.FoodCartReducer;

export const foodCartReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addToCart: (
      state: FoodCartState,
      action: PayloadAction<{ cartItem: CartFood }>,
    ) => {
      const existItemInCart = state.cart.findIndex(
        item => item.id === action.payload.cartItem.id,
      );
      if (existItemInCart === -1) {
        state.cart.push(action.payload.cartItem);
      } else {
        state.cart[existItemInCart].qty += 1;
      }
    },
  },
});
