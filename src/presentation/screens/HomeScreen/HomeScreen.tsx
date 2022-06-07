import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import reactotron from 'reactotron-react-native';

import { SearchInput } from '../../components/SearchInput';
import { foodieApi } from '../../../data/dataSource/api/authService';
import { FoodCard } from './FoodCard';
import { Food } from '../../../domain/model/Food';

export const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');

  const {
    data = [],
    isLoading,
    isFetching,
  } = foodieApi.useGetFoodsQuery(undefined, {});

  reactotron.log({ data, isLoading, isFetching });

  return (
    <SafeAreaView style={styles.container}>
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
          placeholder={'Search'}
          onChangeText={text => setSearch(text)}
        />
      </View>
      {/*<View style={{ flex: 1 }}>*/}
      <FlatList
        horizontal
        bounces={false}
        data={data.food}
        renderItem={({ item }) => <FoodCard food={item} />}
        keyExtractor={(item: Food) => `food-${item.id}`}
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
      />
      {/*</View>*/}
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
