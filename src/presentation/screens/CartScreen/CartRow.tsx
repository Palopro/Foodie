import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { CartFood } from '../../../domain/model/CartFood';
import { QuantitySelector } from './QuantitySelector';

interface CartRowProps {
  cartFood: CartFood;
  onIncrementQty: (cartFood: CartFood) => void;
  onDecrementQty: (cartFood: CartFood) => void;
}

export const CartRow: React.FC<CartRowProps> = ({
  cartFood,
  onDecrementQty,
  onIncrementQty,
}) => {
  const handleIncrementQty = () => {
    onIncrementQty(cartFood);
  };

  const handleDecrementQty = () => {
    onDecrementQty(cartFood);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartFood.photo }} style={styles.photo} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {cartFood.name}
        </Text>
        <View style={styles.priceWrapper}>
          <Text numberOfLines={1} style={styles.price}>
            {cartFood.price.toFixed(2)}
          </Text>
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
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 1)',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'RobotoCondensed-Bold',
  },
  priceWrapper: {
    marginTop: 12,
  },
  price: {
    textAlign: 'left',
    color: 'rgba(250, 74, 12, 1)',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'RobotoCondensed-Bold',
  },
  qtyContainer: {
    position: 'absolute',
    bottom: 18,
    right: 24,
  },
});
