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
  disabled?: boolean;
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

export const RoundButton: React.FC<Props> = ({
  text,
  onPress,
  colorType,
  disabled,
}) => {
  const { color, backgroundColor } = colorScheme[colorType];

  const bgColor = disabled ? 'rgba(177, 177, 179, 1)' : backgroundColor;
  const textColor = disabled ? 'rgba(246, 246, 249, 1)' : color;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 16,
    lineHeight: 20,
  },
});
