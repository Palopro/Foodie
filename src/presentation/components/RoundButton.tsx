import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ColorScheme = 'white' | 'orange';

interface Props {
  text: string;
  onPress: () => void;
  colorType: ColorScheme;
}

const colorScheme = (colorType: ColorScheme) => {
  switch (colorType) {
    case 'white':
      return {
        backgroundColor: '#FFFFFF',
        color: '#FF460A',
      };
    case 'orange':
      return {
        backgroundColor: '#FF460A',
        color: '#FFFFFF',
      };
    default:
      return {
        backgroundColor: '#FF460A',
        color: '#FFFFFF',
      };
  }
};

export const RoundButton: React.FC<Props> = ({ text, onPress, colorType }) => {
  const { color, backgroundColor } = colorScheme(colorType);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 112,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
});
