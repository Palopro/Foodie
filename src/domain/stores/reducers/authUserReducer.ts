import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { User } from '../../model/user';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Reducers } from './reducers';
import { PaymentOption } from '../../model/PaymentOption';
import cardIcon from '../../../assets/images/creditCard.png';
import bankIcon from '../../../assets/images/bank.png';
import paypalIcon from '../../../assets/images/paypal.png';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: User | null;
  paymentOptions: Array<PaymentOption>;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  paymentOptions: [
    new PaymentOption(1, 'Card', 'card', cardIcon, '#F47B0A'),
    new PaymentOption(2, 'Bank account', 'bank', bankIcon, '#EB4796'),
    new PaymentOption(3, 'Paypal', 'paypal', paypalIcon, '#0038FF'),
  ],
};

export const reducerName = Reducers.AuthReducer;

export const authUserReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        foodieApi.endpoints.login.matchPending,
        (state: AuthState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
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
        (
          state: AuthState,
          action: PayloadAction<FetchBaseQueryError | undefined>,
        ) => {
          state.isLoading = false;
          state.error = action.payload.data.error.message;
        },
      )
      .addMatcher(
        foodieApi.endpoints.register.matchPending,
        (state: AuthState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        foodieApi.endpoints.register.matchFulfilled,
        (state: AuthState, action) => {
          state.isLoading = false;
          state.user = action.payload.user;
        },
      )
      .addMatcher(
        foodieApi.endpoints.register.matchRejected,
        (
          state: AuthState,
          action: PayloadAction<FetchBaseQueryError | undefined>,
        ) => {
          state.isLoading = false;
          state.error = action.payload.data.error.message;
        },
      );
  },
});
