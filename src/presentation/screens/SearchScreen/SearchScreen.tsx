import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { SearchInput } from '../../components/SearchInput';
import { AppBarSearch } from '../../components/AppBar/AppBarSearch';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks';
import { findFoodByName } from '../../../domain/stores/reducers/foodReducer';
import { Food } from '../../../domain/model/Food';

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
        <View style={{ flex: 1 }}>
          <SearchInput
            value={searchValue}
            onChangeText={handleSearch}
            placeholder={'Search'}
            withoutIcon
          />
        </View>
      </AppBarSearch>

      <View style={{ flex: 1 }}>
        <FlatList
          data={foods}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
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
});
