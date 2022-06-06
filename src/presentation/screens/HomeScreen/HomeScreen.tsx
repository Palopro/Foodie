import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import { SearchInput } from '../../components/SearchInput';

export const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginHorizontal: 50,
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
