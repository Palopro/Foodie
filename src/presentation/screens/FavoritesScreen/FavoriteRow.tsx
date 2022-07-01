import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import { Food } from '../../../domain/model/Food';
import { StylingText, TextType } from '../../components/StylingText';
import { QuickAction } from '../CartScreen/Action/QuickAction';

interface FavoriteRowProps {
  food: Food;
  onPress: (food: Food) => void;
  onFavorite: (food: Food) => void;
}

export const FavoriteRow: React.FC<FavoriteRowProps> = ({
  food,
  onPress,
  onFavorite,
}) => {
  const handlePress = () => {
    onPress(food);
  };

  const handleFavorite = () => {
    onFavorite(food);
  };

  const renderRightActions = () => (
    <View style={styles.actionRow}>
      <QuickAction iconName="heart-outline" onPress={handleFavorite} />
    </View>
  );

  return (
    <Swipeable
      rightThreshold={85}
      renderRightActions={renderRightActions}
      containerStyle={styles.containerStyle}>
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
    </Swipeable>
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
    height: 102,
  },
  containerStyle: {
    marginHorizontal: 50,
    overflow: 'visible',
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
  actionRow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
  },
});
