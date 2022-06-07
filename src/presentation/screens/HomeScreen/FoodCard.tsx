import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Food } from '../../../domain/model/Food';

interface FoodCardProps {
  food: Food;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }) => (
  <View style={styles.container}>
    <Image source={{ uri: food.photo }} style={styles.image} />
    <View style={styles.nameWrapper}>
      <Text numberOfLines={2} style={styles.name}>
        {food.name}
      </Text>
    </View>
    <View style={styles.priceWrapper}>
      <Text numberOfLines={1} style={styles.priceText}>
        {food.price}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
    width: 170,
    // height: 180,
    marginHorizontal: 12,
  },
  image: {
    width: 120,
    height: 140,
    borderRadius: 12,
    marginTop: -30,
  },
  nameWrapper: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontStyle: 'normal',
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
  },
  priceWrapper: {
    // paddingVertical: 14,
  },
  priceText: {
    color: '#FF460A',
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
  },
});
