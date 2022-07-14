import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { User } from '../../model/user';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Reducers } from './reducers';
import { PaymentOption } from '../../model/PaymentOption';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: User | null;
  paymentOptions: Array<PaymentOption>;
  selectedPayment: PaymentOption;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  paymentOptions: [
    new PaymentOption(1, 'Card', 'card'),
    new PaymentOption(2, 'Bank account', 'bank'),
    new PaymentOption(3, 'Paypal', 'paypal'),
  ],
  selectedPayment: new PaymentOption(1, 'Card', 'card'),
};

export const reducerName = Reducers.AuthReducer;

export const authUserReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.user = null;
      state.error = null;
      state.selectedPayment = new PaymentOption(1, 'Card', 'card');
    },
    setPayment: (state: AuthState, action: PayloadAction<{ payment: PaymentOption }>) => {
      state.selectedPayment = action.payload.payment;
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<AuthState>) {
    builder
      .addMatcher(foodieApi.endpoints.login.matchPending, (state: AuthState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        foodieApi.endpoints.login.matchFulfilled,
        (state: AuthState, action: PayloadAction<{ user: User }>) => {
          state.user = action.payload.user;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        foodieApi.endpoints.login.matchRejected,
        (state: AuthState, action: PayloadAction<FetchBaseQueryError | undefined>) => {
          state.isLoading = false;
          state.error = action.payload.data.error.message;
        },
      )
      .addMatcher(foodieApi.endpoints.register.matchPending, (state: AuthState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(foodieApi.endpoints.register.matchFulfilled, (state: AuthState, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addMatcher(
        foodieApi.endpoints.register.matchRejected,
        (state: AuthState, action: PayloadAction<FetchBaseQueryError | undefined>) => {
          state.isLoading = false;
          state.error = action.payload.data.error.message;
        },
      );
  },
});
