import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBar } from '../../components/AppBar/AppBar';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { AppScreen } from '../../../navigation/AppScreen';

export const ProfileScreen: React.FC<
NativeStackScreenProps<MainAppTabParams>
> = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar onMenuPress={navigation.goBack} onCartPress={handleCartPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
