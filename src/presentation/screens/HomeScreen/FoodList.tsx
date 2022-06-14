import React, { RefObject } from 'react';
import { FoodCard } from './FoodCard';
import { FlatList, StyleSheet, View } from 'react-native';

import { Food } from '../../../domain/model/Food';

interface FoodListProps {
  refList?: RefObject<FlatList>;
  data: Array<Food>;
  onPressFood: (food: Food) => void;
}

export const FoodList: React.FC<FoodListProps> = ({
  data,
  refList,
  onPressFood,
}) => (
  <FlatList
    ref={refList}
    horizontal
    bounces={false}
    data={data}
    renderItem={({ item }) => (
      <FoodCard food={item} onFoodPress={onPressFood} />
    )}
    keyExtractor={(item: Food) => `food-${item.id}`}
    contentContainerStyle={styles.contentList}
    showsHorizontalScrollIndicator={false}
    scrollEventThrottle={16}
    ListHeaderComponent={<View style={styles.header} />}
  />
);

const styles = StyleSheet.create({
  header: {
    width: 33,
  },
  contentList: {
    alignItems: 'center',
  },
});
