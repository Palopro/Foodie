import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Food } from '../../../domain/model/Food';
import { AppBar } from '../../components/AppBar/AppBar';
import { Category } from '../../../domain/model/Category';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { CategoryList } from './CategoryList';
import { FoodList } from './FoodList';
import { SearchButton } from './SearchButton';
import { AppScreen } from '../../../navigation/AppScreen';
import { AppStackParams } from '../../../navigation/AppNavigation';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();
  const [selectedFilter, setFilter] = useState(0);

  const foodListRef = useRef<FlatList<Food>>();

  const { data: foods = [], isLoading: isLoadFoods } =
    foodieApi.useGetFoodsQuery(undefined, {});

  const { data: categories = [], isLoading: isLoadCategories } =
    foodieApi.useGetCategoriesQuery(undefined, {});

  useEffect(() => {
    if (categories && categories.length > 0) {
      setFilter(categories[0].id);
    }
  }, [categories, foods]);

  const handleMenu = () => {
    // TODO: menu press
  };

  const handleCart = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const handleCategorySelect = (category: Category) => {
    setFilter(category.id);

    if (foodListRef && foodListRef.current) {
      foodListRef.current?.scrollToOffset(0);
    }
  };

  const handleSearch = () => {
    navigation.navigate(AppScreen.SearchScreen);
  };

  const handleFoodPress = (food: Food) => {
    navigation.navigate(AppScreen.FoodDetailsScreen, { food });
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
        <SearchButton onPress={handleSearch} />
      </View>
      {isLoadCategories ? null : (
        <CategoryList
          data={categories}
          selectedFilterId={selectedFilter}
          onPressCategory={handleCategorySelect}
        />
      )}
      {isLoadCategories && isLoadFoods ? null : (
        <View style={styles.flatList}>
          <FoodList
            refList={foodListRef}
            data={foods.filter(f => f.categories.includes(selectedFilter))}
            onPressFood={handleFoodPress}
          />
        </View>
      )}
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
    fontFamily: 'RobotoCondensed-Bold',
    textAlign: 'left',
  },
  searchWrapper: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  flatList: {
    flex: 1,
  },
});
