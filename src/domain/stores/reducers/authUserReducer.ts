import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { User } from '../../model/user';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: User | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const reducerName = 'AuthReducer';

export const authUserReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(
        foodieApi.endpoints.login.matchPending,
        (state: AuthState, action) => {
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
        (state: AuthState, action) => {
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
