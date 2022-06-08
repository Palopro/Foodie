import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { Category } from '../../../domain/model/Category';
import { CategoryRow } from './CategoryRow';

interface CategoryListProps {
  data: Array<Category>;
  selectedFilterId: number;
  onPressCategory: (category: Category) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  data,
  selectedFilterId,
  onPressCategory,
}) => {
  const handleSelectCategory = (category: Category) =>
    onPressCategory(category);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        scrollEventThrottle={16}
        ListHeaderComponent={<View style={styles.header} />}
        renderItem={({ item }: ListRenderItemInfo<Category>) => (
          <CategoryRow
            category={item}
            isSelected={item.id === selectedFilterId}
            onPress={handleSelectCategory}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  header: {
    width: 75,
  },
});
