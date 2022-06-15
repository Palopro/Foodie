import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { CartFood } from '../../../domain/model/CartFood';

interface CartRowProps {
  cartFood: CartFood;
}

export const CartRow: React.FC<CartRowProps> = ({ cartFood }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: cartFood.photo }}
      style={{ width: 77, height: 77, resizeMode: 'center', borderRadius: 100 }}
    />
    <View style={{ marginStart: 15 }}>
      <Text numberOfLines={1} style={styles.name}>
        {cartFood.name}
      </Text>
      <View style={{ marginTop: 12 }}>
        <Text numberOfLines={1} style={styles.price}>
          {cartFood.price.toFixed(2)}
        </Text>
      </View>
    </View>
  </View>
);

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
  name: {
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 1)',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'RobotoCondensed-Bold',
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
});
