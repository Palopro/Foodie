import React from 'react';
import { Provider } from 'react-redux';
import { authUserReducer } from '../authUserReducer';
import { act, renderHook } from '@testing-library/react-hooks';

import { foodieApi } from '../../../../data/dataSource/api/foodieApi';
import { setupApiStore } from '../../../../presentation/utils/testUtils/setupApiStore';
import { foodReducer } from '../foodReducer';
import { foodCartReducer } from '../foodCartReducer';

jest.mock('@react-native-async-storage/async-storage', () => ({
  AsyncStorage: {
    clear: jest.fn().mockName('clear'),
    getAllKeys: jest.fn().mockName('getAllKeys'),
    getItem: jest.fn().mockName('getItem'),
    removeItem: jest.fn().mockName('removeItem'),
    setItem: jest.fn().mockName('setItem'),
  },
}));

const wrapper: React.FC = ({ children }) => {
  const storeRef = setupApiStore(foodieApi, {
    authReducer: authUserReducer.reducer,
    foodReducer: foodReducer.reducer,
    cartReducer: foodCartReducer.reducer,
    // [foodieApi.reducerPath]: foodieApi.reducer,
  });
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe('AuthUserReducer', () => {
  it('should logout user', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => foodieApi.useLoginMutation(),
      {
        wrapper,
      },
    );

    const [login, initialResponse] = result.current;

    await act(
      () => void login({ identifier: 'testUser', password: 'u12345678' }),
    );

    const loadingResponse = result.current[1];
    expect(loadingResponse.data).toBeUndefined();
    expect(loadingResponse.isLoading).toBe(true);
  });
});
