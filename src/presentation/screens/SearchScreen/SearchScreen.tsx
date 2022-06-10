import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { SearchInput } from '../../components/SearchInput';
import { AppBarSearch } from '../../components/AppBar/AppBarSearch';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks';
import { findFoodByName } from '../../../domain/stores/reducers/foodReducer';
import { Food } from '../../../domain/model/Food';
import { MasonryList } from './MasonryList';

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

  return (
    <SafeAreaView style={styles.container}>
      <AppBarSearch onBackPress={handleGoBack}>
        <View style={styles.input}>
          <SearchInput
            value={searchValue}
            onChangeText={handleSearch}
            placeholder={'Search'}
            withoutIcon
          />
        </View>
      </AppBarSearch>

      <View style={styles.listContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{`Found ${foods.length} results`}</Text>
        </View>

        <View style={styles.listWrapper}>
          <MasonryList
            foods={foods}
            style={styles.list}
            contentContainerStyle={styles.contentList}
          />
        </View>
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
