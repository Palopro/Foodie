import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { QuantityButton } from './QuantityButton';

interface QuantitySelectorProps {
  qty: number;
  onPressDecrement: () => void;
  onPressIncrement: () => void;
  minQty?: number;
}

const MIN_QTY = 1;

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  qty,
  onPressDecrement,
  onPressIncrement,
  minQty = MIN_QTY,
}) => (
  <View style={styles.container}>
    <QuantityButton
      disabled={qty <= minQty}
      onPress={onPressDecrement}
      text="-"
    />
    <View style={styles.textWrapper}>
      <Text style={styles.text} numberOfLines={1}>
        {qty}
      </Text>
    </View>

    <QuantityButton onPress={onPressIncrement} text="+" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 74, 12, 1)',
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 30,
  },
  textWrapper: {
    paddingHorizontal: 9,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 13,
    lineHeight: 15,
  },
});
