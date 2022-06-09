import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { reactotron } from '../../../ReactotronConfig';
import { foodieApi } from '../../data/dataSource/api/foodieApi';
import { authUserReducer } from './reducers/authUserReducer';
import { foodReducer } from './reducers/foodReducer';

export const store = configureStore({
  reducer: {
    authReducer: authUserReducer.reducer,
    foodReducer: foodReducer.reducer,
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
