import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchButtonProps {
  onPress: () => void;
}

export const SearchButton: React.FC<SearchButtonProps> = ({ onPress }) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Icon name={'search'} color={'#000000'} size={24} style={styles.icon} />

    <View style={styles.textWrapper}>
      <Text style={styles.text}>Search</Text>
    </View>
  </Pressable>
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
  textWrapper: {
    flex: 1,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'left',
  },
});
