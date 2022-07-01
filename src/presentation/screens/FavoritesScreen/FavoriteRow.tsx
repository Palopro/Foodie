import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { Food } from '../../../domain/model/Food';
import { StylingText, TextType } from '../../components/StylingText';

interface FavoriteRowProps {
  food: Food;
  onPress: (food: Food) => void;
}

export const FavoriteRow: React.FC<FavoriteRowProps> = ({ food, onPress }) => {
  const handlePress = () => {
    onPress(food);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: food.photo }} style={styles.photo} />
      <View style={styles.content}>
        <StylingText
          textType={TextType.Bold}
          numberOfLines={1}
          style={styles.name}>
          {food.name}
        </StylingText>
        <View style={styles.priceWrapper}>
          <StylingText
            textType={TextType.Bold}
            numberOfLines={1}
            style={styles.price}>
            {food.price.toFixed(2)}
          </StylingText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 50,
    height: 102,
  },
  photo: {
    width: 77,
    height: 77,
    resizeMode: 'center',
    borderRadius: 100,
  },
  content: {
    marginStart: 15,
  },
  name: {
    fontSize: 17,
    lineHeight: 20,
  },
  priceWrapper: {
    marginTop: 12,
  },
  price: {
    color: 'rgba(250, 74, 12, 1)',
    fontSize: 15,
    lineHeight: 18,
  },
});
