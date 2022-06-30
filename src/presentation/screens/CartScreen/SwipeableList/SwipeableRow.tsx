import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { CartFood } from '../../../../domain/model/CartFood';
import { StylingText, TextType } from '../../../components/StylingText';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { GestureRow } from './GestureRow';

interface SwipeableRowProps {
  cartFood: CartFood;
  onIncrementQty: (cartFood: CartFood) => void;
  onDecrementQty: (cartFood: CartFood) => void;
  onFavorite: (cartFood: CartFood) => void;
  onDelete: (cartFood: CartFood) => void;
}

export const SwipeableRow: React.FC<SwipeableRowProps> = ({
  cartFood,
  onDecrementQty,
  onIncrementQty,
  onDelete,
  onFavorite,
}) => {
  const handleIncrementQty = () => {
    onIncrementQty(cartFood);
  };

  const handleDecrementQty = () => {
    onDecrementQty(cartFood);
  };

  const handleFavorite = () => {
    onFavorite(cartFood);
  };

  const handleDelete = () => {
    onDelete(cartFood);
  };

  return (
    <GestureRow
      cartFood={cartFood}
      onFavorite={handleFavorite}
      onDelete={handleDelete}>
      <View style={styles.container}>
        <Image source={{ uri: cartFood.photo }} style={styles.photo} />
        <View style={styles.content}>
          <StylingText
            textType={TextType.Bold}
            numberOfLines={1}
            style={styles.name}>
            {cartFood.name}
          </StylingText>
          <View style={styles.priceWrapper}>
            <StylingText
              textType={TextType.Regular}
              numberOfLines={1}
              style={styles.price}>
              {cartFood.price.toFixed(2)}
            </StylingText>
          </View>
        </View>

        <View style={styles.qtyContainer}>
          <QuantitySelector
            qty={cartFood.qty}
            onPressDecrement={handleDecrementQty}
            onPressIncrement={handleIncrementQty}
          />
        </View>
      </View>
    </GestureRow>
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
  qtyContainer: {
    position: 'absolute',
    bottom: 18,
    right: 24,
  },
});
