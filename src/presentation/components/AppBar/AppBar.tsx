import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AppBarProps {
  onMenuPress: () => void;
  onCartPress: () => void;
}

const SIZE = 24;

export const AppBar: React.FC<AppBarProps> = ({ onMenuPress, onCartPress }) => (
  <View style={styles.container}>
    <Pressable onPress={onMenuPress}>
      <MaterialIcon name={'menu'} size={SIZE} color={'#000000'} />
    </Pressable>
    <Pressable onPress={onCartPress}>
      <MaterialIcon
        name={'cart-outline'}
        size={SIZE}
        color={'rgba(0, 0, 0, 0.3)'}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 25,
    position: 'relative',
    width: '100%',
  },
});
