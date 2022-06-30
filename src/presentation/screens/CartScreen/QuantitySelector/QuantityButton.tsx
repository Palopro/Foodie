import React from 'react';
import {
  Insets,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';

interface QuantityButtonProps extends PressableProps {
  text: string;
}

const hitSlop: Insets = { top: 8, right: 8, bottom: 8, left: 8 };

export const QuantityButton: React.FC<QuantityButtonProps> = ({
  text,
  ...rest
}) => (
  <Pressable {...rest} hitSlop={hitSlop}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
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
