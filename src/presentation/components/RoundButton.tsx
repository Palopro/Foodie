import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export enum ColorType {
  White = 'white',
  Orange = 'orange',
}

interface Props {
  text: string;
  onPress: () => void;
  colorType: ColorType;
}

const colorScheme = {
  [ColorType.White]: {
    backgroundColor: '#FFFFFF',
    color: '#FF460A',
  },
  [ColorType.Orange]: {
    backgroundColor: '#FF460A',
    color: '#FFFFFF',
  },
};

export const RoundButton: React.FC<Props> = ({ text, onPress, colorType }) => {
  const { color, backgroundColor } = colorScheme[colorType];

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
    // paddingHorizontal: 112,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
});
