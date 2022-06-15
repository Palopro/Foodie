import React from 'react';
import { StyleSheet } from 'react-native';
import { TextField, TextFieldProps } from 'react-native-material-textfield';

export const TextInput: React.FC<TextFieldProps> = props => (
  <TextField
    {...props}
    style={styles.input}
    lineWidth={0.5}
    tintColor="#000000"
    baseColor="#000000"
  />
);

const styles = StyleSheet.create({
  input: {
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
});
