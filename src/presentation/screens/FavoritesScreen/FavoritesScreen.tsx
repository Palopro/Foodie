import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParams } from '../../../navigation/HomeNavigation';

interface FavoritesScreenProps {}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParams>>();

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={navigation.goBack} title="Favorites" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
