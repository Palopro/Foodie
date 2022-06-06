import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';

import { SearchInput } from '../../components/SearchInput';
import { foodieApi } from '../../../data/dataSource/api/authService';
import reactotron from 'reactotron-react-native';
import { FoodCard } from './FoodCard';

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
      <View>
        <Text style={styles.title}>Delicious</Text>
        <Text style={styles.title}>food for you</Text>
      </View>

      <SearchInput
        value={search}
        placeholder={'Search'}
        onChangeText={text => setSearch(text)}
      />

      <View style={{ flex: 1 }}>
        <FlatList
          data={data.food}
          renderItem={({ item }) => <FoodCard food={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    // marginHorizontal: 50,
  },
  titleWrapper: {},
  title: {
    fontSize: 34,
    color: '#000000',
    letterSpacing: -0.03,
    fontWeight: '700',
    textAlign: 'left',
  },
});
