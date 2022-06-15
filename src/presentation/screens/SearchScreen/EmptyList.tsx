import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import search from '../../../assets/images/search.png';

export const EmptyList: React.FC = () => (
  <View style={styles.container}>
    <Image source={search} style={{ width: 122, height: 122, resizeMode:'contain' }} />

    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Item not found</Text>
    </View>
    <View style={styles.subTextWrapper}>
      <Text style={styles.subText}>
        Try searching the item with a different keyword.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 100,
  },
  title: {
    textAlign: 'center',
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 28,
    lineHeight: 32,
  },
  subTextWrapper: {
    paddingHorizontal: 90,
    marginTop: 17,
  },
  subText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.57)',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 17,
    lineHeight: 19,
  },
});
