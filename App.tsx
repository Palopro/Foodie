import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, View } from 'react-native';

import { persistor } from './src/domain/stores/store';
import { RootNavigation } from './src/navigation/RootNavigation';

if (__DEV__) {
  import('./ReactotronConfig');
}

const Loader = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    }}>
    <ActivityIndicator animating color="#FF460A" />
  </View>
);

export const App = () => (
  <PersistGate loading={<Loader />} persistor={persistor}>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </PersistGate>
);
