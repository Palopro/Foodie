import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  withIcon?: boolean;
}

export const SearchInput: React.FC<Props> = ({
  value,
  placeholder,
  onChangeText,
  withIcon,
}) => (
  <View style={styles.container}>
    {withIcon && (
      <Icon name="search" color="#000000" size={24} style={styles.icon} />
    )}

    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
      placeholderTextColor="rgba(0, 0, 0, 0.5)"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEEEE',
    height: 60,
    borderRadius: 30,
    paddingStart: 35,
    paddingEnd: 5,
  },
  icon: {
    marginEnd: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#EFEEEE',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
  },
});
