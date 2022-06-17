import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './src/domain/stores/store';
import { MainNavigation } from './src/navigation/MainNavigation';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { useAppSelector } from './src/hooks';
import SplashScreen from 'react-native-splash-screen';

if (__DEV__) {
  import('./ReactotronConfig');
}

export const App = () => {
  const user = useAppSelector(state => state.authReducer.user);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        {user ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </PersistGate>
  );
};
