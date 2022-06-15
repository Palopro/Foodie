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
  const textColor = isSelected
    ? 'rgba(250, 74, 12, 1)'
    : 'rgba(154, 154, 157, 1)';

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View>
        <Text style={[styles.name, { color: textColor }]}>{category.name}</Text>
        <View
          style={[
            styles.line,
            {
              backgroundColor: bgColor,
            },
          ]}
        />
      </View>
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
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
  },
  line: {
    marginTop: 10,
    height: 3,
    borderRadius: 12,
  },
});
