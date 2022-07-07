import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';

import { persistor } from './src/domain/stores/store';
import { RootNavigation } from './src/navigation/RootNavigation';
import { NetworkScreen } from './src/presentation/screens/NetworkScreen';

if (__DEV__) {
  import('./ReactotronConfig');
}

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator animating color="#FF460A" />
  </View>
);

export const App = () => {
  const [isReachable, setIsReachable] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected !== isReachable) {
        setIsReachable(state.isConnected);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [isReachable]);

  const handleTryAgain = async () => {
    const networkState = await NetInfo.refresh();
    setIsReachable(networkState.isConnected);
  };

  if (!isReachable) {
    return <NetworkScreen onTryAgain={handleTryAgain} />;
  }

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
