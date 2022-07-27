import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';

export const UploadImageScreen: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const t = 0;
  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={navigation.goBack} title="Upload image" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
