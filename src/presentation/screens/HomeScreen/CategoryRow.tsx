import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Category } from '../../../domain/model/Category';

interface CategoryRowProps {
  category: Category;
  isSelected: boolean;
  onPress: (category: Category) => void;
}

export const CategoryRow: React.FC<CategoryRowProps> = ({
  category,
  isSelected,
  onPress,
}) => {
  const handlePress = () => onPress(category);

  const bgColor = isSelected ? '#FA4A0C' : 'transparent';

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.name}>{category.name}</Text>
      <View style={[styles.line, { backgroundColor: bgColor }]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 87,
    alignItems: 'stretch',
  },
  name: {
    marginStart: 20,
  },
  line: {
    marginTop: 10,
    height: 3,
    borderRadius: 12,
  },
});
