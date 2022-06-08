import React from 'react';
import { Provider } from 'react-redux';

import { AppNavigation } from './src/navigation/AppNavigation';
import { store } from './src/domain/stores/store';

if (__DEV__) {
  import('./ReactotronConfig');
}

export const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);
