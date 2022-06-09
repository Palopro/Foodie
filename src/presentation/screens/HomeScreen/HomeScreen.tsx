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
import { AppBar } from '../../components/AppBar';
import { Category } from '../../../domain/model/Category';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { FoodCard } from './FoodCard';
import { CategoryRow } from './CategoryRow';

export const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setFilter] = useState(0);

  const foodListRef = useRef<FlatList<Food>>();

  const { data: foods = [] } = foodieApi.useGetFoodsQuery(undefined, {});

  const { data: categories = [] } = foodieApi.useGetCategoriesQuery(
    undefined,
    {},
  );

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
      foodListRef.current?.scrollToOffset(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar onMenuPress={handleMenu} onCartPress={handleCart} />
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#000000'}
        animated
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Delicious</Text>
        <Text style={styles.title}>food for you</Text>
      </View>

      <View style={styles.searchWrapper}>
        <SearchInput
          value={search}
          placeholder="Search"
          onChangeText={text => setSearch(text)}
        />
      </View>
      <View style={styles.containerCategory}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          scrollEventThrottle={16}
          keyExtractor={(item: Category) => `category-${item.id}`}
          ListHeaderComponent={<View style={styles.headerCategory} />}
          ListEmptyComponent={<View />}
          renderItem={({ item }: ListRenderItemInfo<Category>) => (
            <CategoryRow
              category={item}
              isSelected={item.id === selectedFilter}
              onPress={handleCategorySelect}
            />
          )}
        />
      </View>
      <View style={styles.flatList}>
        <FlatList
          ref={foodListRef}
          horizontal
          bounces={false}
          data={foods.filter(f => f.categories.includes(selectedFilter))}
          renderItem={({ item }) => <FoodCard food={item} />}
          keyExtractor={(item: Food) => `food-${item.id}`}
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
