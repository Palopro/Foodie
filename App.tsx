import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
  <GestureHandlerRootView style={{ flex: 1 }}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PersistGate>
  </GestureHandlerRootView>
);
