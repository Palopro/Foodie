import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { App } from './App';
import { name as appName } from './app.json';
import { store } from './src/domain/stores/store';

const Root = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
