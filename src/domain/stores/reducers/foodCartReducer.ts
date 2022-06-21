import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartFood } from '../../model/CartFood';
import { RootState } from '../store';

interface FoodCartState {
  cart: Array<CartFood>;
}

const initialState: FoodCartState = {
  cart: [],
};

export const reducerName = 'FoodCartReducer';

export const foodCartReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addToCart: (
      state: FoodCartState,
      action: PayloadAction<{ cartItem: CartFood }>,
    ) => {
      state.cart.push(action.payload.cartItem);
    },
    removeFromCart: (
      state: FoodCartState,
      action: PayloadAction<{ cartItem: CartFood }>,
    ) => {
      state.cart = state.cart.filter(
        food => food.id !== action.payload.cartItem.id,
      );
    },
    incrementCartFoodQty: (
      state: FoodCartState,
      action: PayloadAction<{ cartItem: CartFood }>,
    ) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.cartItem.id,
      );
      if (itemIndex !== -1) {
        const item = state.cart[itemIndex];

        state.cart[itemIndex].qty = action.payload.cartItem.qty + 1;

        state.cart[itemIndex] = { ...item };
      }
    },
    decrementCartFoodQty: (
      state: FoodCartState,
      action: PayloadAction<{ cartItem: CartFood }>,
    ) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.cartItem.id,
      );
      if (itemIndex !== -1) {
        const item = state.cart[itemIndex];

        item.qty = action.payload.cartItem.qty - 1;

        state.cart[itemIndex] = { ...item };
      }
    },
  },
});

export const totalInCart = ({ cartReducer }: RootState): number =>
  cartReducer.cart.reduce(
    (acc: number, cartItem: CartFood) => acc + cartItem.price * cartItem.qty,
    0,
  );
