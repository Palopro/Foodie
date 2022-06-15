import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ForgotPasswordButtonProps {
  onPress?: () => void;
}

export const ForgotPasswordButton: React.FC<ForgotPasswordButtonProps> = ({
  onPress,
}) => (
  <Pressable onPress={onPress}>
    <Text style={styles.forgotPassText}>Forgot password?</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  forgotPassText: {
    color: '#FA4A0C',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontStyle: 'normal',
    fontSize: 16,
    textAlign: 'left',
  },
});
