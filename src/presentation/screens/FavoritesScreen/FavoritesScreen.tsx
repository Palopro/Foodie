import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBar } from '../../components/AppBar/AppBar';
import { AppScreen } from '../../../navigation/AppScreen';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { StylingText, TextType } from '../../components/StylingText';
import { Food } from '../../../domain/model/Food';
import { favoriteFoods } from '../../../domain/stores/reducers/foodReducer';
import { useAppSelector } from '../../../hooks';
import { FavoriteRow } from './FavoriteRow';

interface FavoritesScreenProps
  extends NativeStackScreenProps<MainAppTabParams> {}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  navigation,
}) => {
  const foodState = useAppSelector(({ foodReducer }) => foodReducer);
  const foods = favoriteFoods(foodState);

  const handleMenu = () => {
    // TODO: menu press
  };

  const handleCart = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const handlePressFood = (food: Food) => {
    navigation.navigate(AppScreen.FoodDetailsScreen, { food });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Food>) => (
    <FavoriteRow food={item} onPress={handlePressFood} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <AppBar onMenuPress={handleMenu} onCartPress={handleCart} />

      <View style={styles.titleWrapper}>
        <StylingText style={styles.title} textType={TextType.Bold}>
          Favorites
        </StylingText>
      </View>

      <FlatList
        data={foods}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  titleWrapper: {
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 34,
    letterSpacing: -0.03,
    lineHeight: 40,
  },
});
