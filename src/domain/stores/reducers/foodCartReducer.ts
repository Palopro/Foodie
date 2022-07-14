import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartFood } from '../../model/CartFood';
import { Reducers } from './reducers';
import { RootState } from '../store';
import { DeliveryNote } from '../../model/DeliveryNote';
import { DeliveryType } from '../../model/DeliveryType';

interface FoodCartState {
  cart: Array<CartFood>;
  deliveryNotes: Array<DeliveryNote>;
  deliveryMethods: Array<DeliveryType>;
}

const initialState: FoodCartState = {
  cart: [],
  deliveryNotes: [
    new DeliveryNote(1, 'Delivery to Mainland', 'N1000 - N2000'),
    new DeliveryNote(2, 'Delivery to island', 'N2000 - N3000'),
  ],
  deliveryMethods: [new DeliveryType(1, 'Door delivery', 'DoorDelivery'), new DeliveryType(2, 'Pick up', 'PickUp')],
};

export const reducerName = Reducers.FoodCartReducer;

export const foodCartReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addToCart: (state: FoodCartState, action: PayloadAction<{ cartItem: CartFood }>) => {
      const existItemInCart = state.cart.findIndex(item => item.id === action.payload.cartItem.id);
      if (existItemInCart === -1) {
        state.cart.push(action.payload.cartItem);
      } else {
        state.cart[existItemInCart].qty += 1;
      }
    },
    removeFromCart: (state: FoodCartState, action: PayloadAction<{ cartItem: CartFood }>) => {
      state.cart = state.cart.filter(food => food.id !== action.payload.cartItem.id);
    },
    incrementCartFoodQty: (state: FoodCartState, action: PayloadAction<{ cartItem: CartFood }>) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.cartItem.id);
      if (itemIndex === -1) {
        return;
      }
      const item = state.cart[itemIndex];

      state.cart[itemIndex].qty = action.payload.cartItem.qty + 1;

      state.cart[itemIndex] = { ...item };
    },
    decrementCartFoodQty: (state: FoodCartState, action: PayloadAction<{ cartItem: CartFood }>) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.cartItem.id);
      if (itemIndex === -1) {
        return;
      }
      const item = state.cart[itemIndex];

      item.qty = action.payload.cartItem.qty - 1;

      state.cart[itemIndex] = { ...item };
    },
    clearCart: (state: FoodCartState) => {
      state.cart = [];
    },
  },
});

export const totalInCart = ({ cartReducer }: RootState): number =>
  cartReducer.cart.reduce((acc: number, cartItem: CartFood) => acc + cartItem.price * cartItem.qty, 0);
