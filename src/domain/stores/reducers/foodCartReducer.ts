import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartFood } from '../../model/CartFood';

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
  },
});
