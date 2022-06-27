import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export enum Type {
  Proceed = 'Proceed',
  Cancel = 'Cancel',
}

interface RoundlessButtonProps {
  onPress: () => void;
  text: string;
  type: Type;
}

export const RoundlessButton: React.FC<RoundlessButtonProps> = ({
  onPress,
  type,
  text,
}) => {
  let t = 0;

  return (
    <Pressable
      style={type === Type.Proceed ? styles.proceedButton : undefined}
      onPress={onPress}>
      <Text
        style={[
          styles.proceedText,
          { color: type === Type.Proceed ? '#FFFFFF' : 'rgba(0, 0, 0, 0.5)' },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

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
