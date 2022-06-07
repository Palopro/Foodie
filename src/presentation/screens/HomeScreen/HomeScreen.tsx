import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import reactotron from 'reactotron-react-native';

import { SearchInput } from '../../components/SearchInput';
import { foodieApi } from '../../../data/dataSource/api/authService';
import { FoodCard } from './FoodCard';
import { Food } from '../../../domain/model/Food';
import { AppBar } from '../../components/AppBar';
import { Category } from '../../../domain/model/Category';

export const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setFilter] = useState(0);

  const { data: foods } = foodieApi.useGetFoodsQuery(undefined, {});

  const { data: categories, isLoading: isLoadCategories } = foodieApi.useGetCategoriesQuery(undefined, {});

  useEffect(() => {
    if (categories && categories.length > 0) {
      setFilter(categories[0].id);
    }
  }, [categories]);

  reactotron.log({ foods, categories });

  const handleMenu = () => {
    // TODO: menu press
  };

  const handleCart = () => {
    // TODO: cart press
  };

  const renderCategories = () => (
    <ScrollView horizontal scrollEventThrottle={16}>
      {categories.map((category: Category) => {
        const isSelected = 1;

        return (
          <View>
            <Text>{category.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );

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
      {isLoadCategories ? null : renderCategories()}
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          bounces={false}
          data={foods}
          renderItem={({ item }) => <FoodCard food={item} />}
          keyExtractor={(item: Food) => `food-${item.id}`}
          contentContainerStyle={{ alignItems: 'center' }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          ListHeaderComponent={<View style={{ width: 33 }} />}
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
});
