import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import { reactotron } from '../../../ReactotronConfig';
import { foodieApi } from '../../data/dataSource/api/foodieApi';
import { authUserReducer } from './reducers/authUserReducer';
import { foodReducer } from './reducers/foodReducer';
import { foodCartReducer } from './reducers/foodCartReducer';
import { Reducers } from './reducers/reducers';

enum Reducer {
  AuthReducer = 'authReducer',
  FoodReducer = 'foodReducer',
  CartReducer = 'cartReducer',
}

const blackList = ['navigation', Reducers.FoodReducer, 'FoodieApi'];
const whiteList = [Reducers.AuthReducer];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList,
  whiteList,
};

const reducers = combineReducers({
  [Reducer.AuthReducer]: authUserReducer.reducer,
  [Reducer.FoodReducer]: foodReducer.reducer,
  [Reducer.CartReducer]: foodCartReducer.reducer,
  [foodieApi.reducerPath]: foodieApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      foodieApi.middleware,
    ),
  enhancers: [reactotron.createEnhancer(true)],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
