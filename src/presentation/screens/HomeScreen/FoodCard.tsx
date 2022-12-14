import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Food } from '../../../domain/model/Food';

interface FoodCardProps {
  food: Food;
  onFoodPress: (food: Food) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food, onFoodPress }) => {
  const handlePress = () => onFoodPress(food);

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={{ uri: food.photo }} style={styles.image} />
      <View style={styles.nameWrapper}>
        <Text numberOfLines={2} style={styles.name}>
          {food.name}
        </Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text numberOfLines={1} style={styles.priceText}>
          {food.price.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
    width: 220,
    height: 270,
    marginHorizontal: 17,
  },
  image: {
    width: 168,
    height: 189,
    borderRadius: 12,
    marginTop: -42,
  },
  nameWrapper: {
    marginTop: 16,
    height: 52,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 22,
    lineHeight: 23,
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    textAlign: 'center',
  },
  priceWrapper: {
    marginTop: 4,
  },
  priceText: {
    color: '#FF460A',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    textAlign: 'center',
  },
});
