import React from 'react';
import { Text, View } from 'react-native';
import { Food } from '../../../domain/model/Food';

interface FoodCardProps {
  food: Food;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }) => (
  <View style={{ backgroundColor: '#FFFFFF' }}>
    <Text>{food.name}</Text>
  </View>
);
