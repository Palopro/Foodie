import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SearchInput } from '../../components/SearchInput';
import { AppBarSearch } from '../../components/AppBar/AppBarSearch';
import { useAppSelector } from '../../../hooks';
import { findFoodByName } from '../../../domain/stores/reducers/foodReducer';
import { Food } from '../../../domain/model/Food';
import { SearchFoodRow } from './SearchFoodRow';
import { EmptyList } from './EmptyList';

export const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [foods, setFoods] = useState<Array<Food>>([]);

  const foodState = useAppSelector(({ foodReducer }) => foodReducer);

  const searchFood = useCallback(
    (name: string) => {
      const filterFoods = findFoodByName(name)(foodState);
      setFoods(filterFoods);
    },
    [foodState],
  );

  useEffect(() => {
    searchFood(searchValue);
  }, [searchFood, searchValue]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSearch = (text: string) => {
    setSearchValue(text);
    searchFood(text);
  };

  const foodKey = (food: Food) => `food-${food.id}`;

  const renderRow = ({ item, index }: ListRenderItemInfo<Food>) => (
    <SearchFoodRow food={item} index={index} />
  );

  const renderHeader = () => (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{`Found ${foods.length} results`}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppBarSearch onBackPress={handleGoBack}>
        <View style={styles.input}>
          <SearchInput
            value={searchValue}
            onChangeText={handleSearch}
            placeholder="Search"
          />
        </View>
      </AppBarSearch>

      <View style={styles.listContainer}>
        <FlatList
          data={foods}
          numColumns={2}
          keyExtractor={foodKey}
          bounces={false}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          renderItem={renderRow}
          contentContainerStyle={{ flex: foods.length > 0 ? 0 : 1 }}
          ListHeaderComponent={foods.length > 0 ? renderHeader : undefined}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    overflow: 'hidden',
  },
  titleWrapper: {
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 60,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '700',
    color: '#000000',
  },
  listWrapper: {
    flex: 1,
  },
  list: {
    backgroundColor: '#F9F9F9',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    overflow: 'hidden',
  },
  contentList: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
});
