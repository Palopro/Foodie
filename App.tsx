import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Splash from 'react-native-splash-screen';

import { AppNavigation } from './src/navigation/AppNavigation';
import { store } from './src/domain/stores/store';

if (__DEV__) {
  import('./ReactotronConfig');
}

export const App = () => {
  useEffect(() => {
    Splash.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};
