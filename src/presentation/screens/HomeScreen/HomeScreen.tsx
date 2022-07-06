import React, { useEffect, useRef, useState } from 'react';
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

import { Food } from '../../../domain/model/Food';
import { AppBar } from '../../components/AppBar/AppBar';
import { Category } from '../../../domain/model/Category';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { SearchButton } from './SearchButton';
import { AppScreen } from '../../../navigation/AppScreen';
import { FoodCard } from './FoodCard';
import { CategoryRow } from './CategoryRow';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { StylingText, TextType } from '../../components/StylingText';

export const HomeScreen: React.FC<NativeStackScreenProps<MainAppTabParams>> = ({
  navigation,
}) => {
  const [selectedFilter, setFilter] = useState(0);

  const foodListRef = useRef<FlatList<Food>>();

  const { data: categories = [] } = foodieApi.useGetCategoriesQuery();
  const { data: foods = [] } = foodieApi.useGetFoodsQuery();

  useEffect(() => {
    if (categories && categories.length > 0) {
      setFilter(categories[0].id);
    }
  }, [categories]);

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleCart = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const handleCategorySelect = (category: Category) => {
    setFilter(category.id);

    if (foodListRef && foodListRef.current) {
      foodListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const categoryKey = (category: Category) => `category-${category.id}`;

  const foodKey = (food: Food) => `food-${food.id}`;

  const renderCategory = ({ item }: ListRenderItemInfo<Category>) => (
    <CategoryRow
      category={item}
      isSelected={item.id === selectedFilter}
      onPress={handleCategorySelect}
    />
  );

  const renderFood = ({ item }: ListRenderItemInfo<Food>) => (
    <FoodCard food={item} onFoodPress={handleFoodPress} />
  );

  const filteredFoods = foods.filter(f =>
    f.categories.includes(selectedFilter),
  );

  const handleSearch = () => {
    navigation.navigate(AppScreen.SearchScreen);
  };

  const handleFoodPress = (food: Food) => {
    navigation.navigate(AppScreen.FoodDetailsScreen, { food });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <AppBar onMenuPress={handleMenu} onCartPress={handleCart} />
      <View style={styles.titleWrapper}>
        <StylingText textType={TextType.Bold} style={styles.title}>
          Delicious
        </StylingText>
        <StylingText textType={TextType.Bold} style={styles.title}>
          food for you
        </StylingText>
      </View>

      <View style={styles.searchWrapper}>
        <SearchButton onPress={handleSearch} />
      </View>
      <View style={styles.containerCategory}>
        <FlatList
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={categories}
          scrollEventThrottle={16}
          keyExtractor={categoryKey}
          ListHeaderComponent={<View style={styles.headerCategory} />}
          ListEmptyComponent={<View />}
          renderItem={renderCategory}
        />
      </View>
      <View style={styles.flatList}>
        <FlatList
          ref={foodListRef}
          horizontal
          bounces={false}
          data={filteredFoods}
          renderItem={renderFood}
          keyExtractor={foodKey}
          contentContainerStyle={styles.contentList}
          ListEmptyComponent={<View />}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          ListHeaderComponent={<View style={styles.header} />}
        />
      </View>
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
  searchWrapper: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  flatList: {
    flex: 1,
  },
  header: {
    width: 33,
  },
  contentList: {
    alignItems: 'center',
  },
  headerCategory: {
    width: 75,
  },
  containerCategory: {
    height: 40,
  },
});
