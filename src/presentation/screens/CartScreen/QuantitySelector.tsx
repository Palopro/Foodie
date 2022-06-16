import React from 'react';
import { Insets, Pressable, StyleSheet, Text, View } from 'react-native';

interface QuantitySelectorProps {
  qty: number;
  onPressDecrement: () => void;
  onPressIncrement: () => void;
}

const hitSlop: Insets = { top: 8, right: 8, bottom: 8, left: 8 };

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  qty,
  onPressDecrement,
  onPressIncrement,
}) => (
  <View style={styles.container}>
    <Pressable hitSlop={hitSlop} onPress={onPressDecrement}>
      <Text style={styles.buttonText}>-</Text>
    </Pressable>
    <View style={styles.textWrapper}>
      <Text style={styles.text} numberOfLines={1}>
        {qty}
      </Text>
    </View>
    <Pressable hitSlop={hitSlop} onPress={onPressIncrement}>
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
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
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 13,
    lineHeight: 15,
  },
});
