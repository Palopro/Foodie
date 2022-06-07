import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authUserReducer';
import reactotron from '../../../ReactotronConfig';
import { foodieApi } from '../../data/dataSource/api/authService';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    authReducer,
    [foodieApi.reducerPath]: foodieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      foodieApi.middleware,
    ),
  enhancers: [reactotron.createEnhancer(true)],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
