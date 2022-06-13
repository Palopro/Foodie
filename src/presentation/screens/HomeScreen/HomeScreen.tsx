import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';

import { SearchInput } from '../../components/SearchInput';
import { Food } from '../../../domain/model/Food';
import { AppBar } from '../../components/AppBar/AppBar';
import { Category } from '../../../domain/model/Category';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { FoodCard } from './FoodCard';
import { CategoryRow } from './CategoryRow';

export const HomeScreen: React.FC = () => {
  const [selectedFilter, setFilter] = useState(0);

  const foodListRef = useRef<FlatList<Food>>();

  const { data: foods = [] } = foodieApi.useGetFoodsQuery();
  const { data: categories = [] } = foodieApi.useGetCategoriesQuery();

  useEffect(() => {
    if (categories && categories.length > 0) {
      setFilter(categories[0].id);
    }
  }, [categories, foods]);

  const handleMenu = () => {
    // TODO: menu press
  };

  const handleCart = () => {
    // TODO: cart press
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
    <FoodCard food={item} />
  );

  const filteredFoods = () =>
    foods.filter(f => f.categories.includes(selectedFilter));

  return (
    <SafeAreaView style={styles.container}>
      <AppBar onMenuPress={handleMenu} onCartPress={handleCart} />
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Delicious</Text>
        <Text style={styles.title}>food for you</Text>
      </View>

      <View style={styles.searchWrapper}>
        <SearchInput
          value={''}
          placeholder="Search"
          onChangeText={() => true}
        />
      </View>
      <View style={styles.containerCategory}>
        <FlatList
          horizontal
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
          data={filteredFoods()}
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
    color: '#000000',
    letterSpacing: -0.03,
    fontWeight: '700',
    textAlign: 'left',
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
