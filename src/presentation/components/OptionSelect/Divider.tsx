import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Divider: React.FC = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginStart: 30,
  },
});
