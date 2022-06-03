import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authUserReducer';
import reactotron from '../../../ReactotronConfig';

export const store = configureStore({
  reducer: {
    authReducer,
  },
  enhancers: [reactotron.createEnhancer(true)],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
