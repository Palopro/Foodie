import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loader: React.FC = () => (
  <View style={styles.loaderWrapper}>
    <ActivityIndicator color="#FF460A" animating hidesWhenStopped />
  </View>
);

const styles = StyleSheet.create({
  loaderWrapper: {
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
