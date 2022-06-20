import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import { reactotron } from '../../../ReactotronConfig';
import { foodieApi } from '../../data/dataSource/api/foodieApi';
import { authUserReducer } from './reducers/authUserReducer';
import { foodReducer } from './reducers/foodReducer';
import { foodCartReducer } from './reducers/foodCartReducer';

const blackList = ['navigation'];
const whiteList = ['authReducer'];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList,
  whiteList,
};

const reducers = combineReducers({
  authReducer: authUserReducer.reducer,
  foodReducer: foodReducer.reducer,
  cartReducer: foodCartReducer.reducer,
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
