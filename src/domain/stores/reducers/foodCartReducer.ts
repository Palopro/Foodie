import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartFood } from '../../model/CartFood';
import { Reducers } from './reducers';
import { RootState } from '../store';
import { DeliveryNote } from '../../model/DeliveryNote';

interface FoodCartState {
  cart: Array<CartFood>;
  deliveryNotes: Array<DeliveryNote>;
}

const initialState: FoodCartState = {
  cart: [],
  deliveryNotes: [
    { id: 1, name: 'Delivery to Mainland', desc: 'N1000 - N2000' },
    { id: 2, name: 'Delivery to island', desc: 'N2000 - N3000' },
  ],
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
      if (itemIndex === -1) {
        return;
      }
      const item = state.cart[itemIndex];

      state.cart[itemIndex].qty = action.payload.cartItem.qty + 1;

      state.cart[itemIndex] = { ...item };
    },
    decrementCartFoodQty: (
      state: FoodCartState,
      action: PayloadAction<{ cartItem: CartFood }>,
    ) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.cartItem.id,
      );
      if (itemIndex === -1) {
        return;
      }
      const item = state.cart[itemIndex];

      item.qty = action.payload.cartItem.qty - 1;

      state.cart[itemIndex] = { ...item };
    },
  },
});

export const totalInCart = ({ cartReducer }: RootState): number =>
  cartReducer.cart.reduce(
    (acc: number, cartItem: CartFood) => acc + cartItem.price * cartItem.qty,
    0,
  );
