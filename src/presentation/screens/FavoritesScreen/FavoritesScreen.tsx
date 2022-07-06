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
import { DrawerActions } from '@react-navigation/native';

import { AppBar } from '../../components/AppBar/AppBar';
import { AppScreen } from '../../../navigation/AppScreen';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { StylingText, TextType } from '../../components/StylingText';
import { Food } from '../../../domain/model/Food';
import {
  favoriteFoods,
  foodReducer,
} from '../../../domain/stores/reducers/foodReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { FavoriteRow } from './FavoriteRow';
import { ListEmpty } from './ListEmpty';

export const FavoritesScreen: React.FC<
NativeStackScreenProps<MainAppTabParams>
> = ({ navigation }) => {
  const foodState = useAppSelector(state => state.foodReducer);
  const foods = favoriteFoods(foodState);
  const dispatch = useAppDispatch();

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleCart = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const handlePressFood = (food: Food) => {
    navigation.navigate(AppScreen.FoodDetailsScreen, { food });
  };

  const handleFavorite = (food: Food) => {
    dispatch(foodReducer.actions.handleFavorite(food.id));
  };

  const renderItem = ({ item }: ListRenderItemInfo<Food>) => (
    <FavoriteRow
      food={item}
      onFavorite={handleFavorite}
      onPress={handlePressFood}
    />
  );

  const keyExtractor = (food: Food) => `food-${food.id}`;

  const renderSeparator = () => <View style={styles.divider} />;

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
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={ListEmpty}
        ListHeaderComponent={<View style={styles.header} />}
        contentContainerStyle={{ flex: foods.length === 0 ? 1 : undefined }}
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
  header: {
    height: 40,
  },
  divider: {
    height: 14,
  },
});
