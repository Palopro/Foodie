import React from 'react';

import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/domain/stores/store';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);
