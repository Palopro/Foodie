import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export enum Type {
  Proceed = 'Proceed',
  Cancel = 'Cancel',
}

interface RoundlessButtonProps {
  onPress: () => void;
  text: string;
  buttonType: Type;
}

export const RoundlessButton: React.FC<RoundlessButtonProps> = ({
  onPress,
  buttonType,
  text,
}) => (
  <Pressable style={buttonStyles[buttonType]} onPress={onPress}>
    <Text style={[styles.proceedText, { color: textStyles[buttonType] }]}>
      {text}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  proceedButton: {
    backgroundColor: '#FA4A0C',
    paddingHorizontal: 44,
    paddingVertical: 17,
    borderRadius: 30,
  },
  proceedText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
  },
  cancel: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
  },
});

const buttonStyles = {
  [Type.Cancel]: undefined,
  [Type.Proceed]: styles.proceedButton,
};
const textStyles = {
  [Type.Cancel]: 'rgba(0, 0, 0, 0.5)',
  [Type.Proceed]: '#FFFFFF',
};
