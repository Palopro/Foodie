import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { Food } from '../../../domain/model/Food';
import { SearchFoodRow } from './SearchFoodRow';

interface MasonryListProps {
  foods: Array<Food>;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const MasonryList: React.FC<MasonryListProps> = ({
  foods,
  contentContainerStyle,
  style,
}) => (
  <ScrollView
    style={style}
    bounces={false}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={contentContainerStyle}
    scrollEventThrottle={16}>
    <View style={styles.row}>
      <View style={styles.leftRow}>
        {foods
          .filter((_, index) => index % 2 === 0)
          .map(item => (
            <SearchFoodRow key={item.id} food={item} />
          ))}
      </View>

      <View style={styles.rightRow}>
        {foods
          .filter((_, index) => index % 2 !== 0)
          .map(item => (
            <SearchFoodRow key={item.id} food={item} />
          ))}
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  leftRow: {
    flex: 1,
    alignItems: 'center',
  },
  rightRow: {
    flex: 1,
    marginTop: 55,
    alignItems: 'center',
  },
});
