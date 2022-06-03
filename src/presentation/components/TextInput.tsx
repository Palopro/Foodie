import React from 'react';
import { StyleSheet } from 'react-native';
import { TextField, TextFieldProps } from 'react-native-material-textfield';

interface Props extends TextFieldProps {}

export const TextInput: React.FC<Props> = ({
  value,
  label,
  placeholder,
  onChangeText,
  disabled,
  secureTextEntry,
  formatText,
}) => (
  <TextField
    value={value}
    label={label}
    placeholder={placeholder}
    onChangeText={onChangeText}
    disabled={disabled}
    secureTextEntry={secureTextEntry}
    formatText={formatText}
    style={styles.input}
    lineWidth={0.5}
    tintColor={'#000000'}
    baseColor={'#000000'}
  />
);

const styles = StyleSheet.create({
  input: {
    color: '#000000',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
});
