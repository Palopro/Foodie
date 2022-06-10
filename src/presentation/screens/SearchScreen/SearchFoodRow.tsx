import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import { Food } from '../../../domain/model/Food';

interface SearchFoodRowProps {
  food: Food;
}

const { width } = Dimensions.get('window');

const rowWidth = (width - 17 * 2) / 2 - 10;

const IMAGE_PADDING = 26;

export const SearchFoodRow: React.FC<SearchFoodRowProps> = ({ food }) => (
  <View style={[styles.container, { width: rowWidth }]}>
    <View style={styles.imageWrapper}>
      <Image
        source={{ uri: food.photo }}
        resizeMethod={'resize'}
        resizeMode={'center'}
        style={[
          styles.image,
          {
            width: rowWidth - IMAGE_PADDING,
            height: rowWidth - IMAGE_PADDING,
          },
        ]}
      />
    </View>

    <View style={styles.nameWrapper}>
      <Text numberOfLines={2} style={styles.name}>
        {food.name}
      </Text>
    </View>
    <View style={styles.priceWrapper}>
      <Text style={styles.price}>{food.price.toFixed(2)}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 17,
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  imageWrapper: {
    marginTop: -48,
  },
  image: {
    resizeMode: 'center',
    borderRadius: 100,
  },
  nameWrapper: {
    marginTop: 14,
    height: 45,
  },
  name: {
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  priceWrapper: {
    marginTop: 18,
    marginBottom: 30,
  },
  price: {
    color: '#FF460A',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
});
