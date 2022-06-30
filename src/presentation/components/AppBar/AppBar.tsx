import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { AppBarButton } from './AppBarButton';
import menuIcon from '../../../assets/images/menu.png';

interface AppBarProps {
  onMenuPress: () => void;
  onCartPress: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ onMenuPress, onCartPress }) => (
  <View style={styles.container}>
    {/*<AppBarButton name="menu" onPress={onMenuPress} />*/}
    <Pressable hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}>
      <Image
        source={menuIcon}
        style={{ width: 22, height: 15, resizeMode: 'center' }}
      />
    </Pressable>
    <AppBarButton
      name="cart-outline"
      onPress={onCartPress}
      color="rgba(0, 0, 0, 0.3)"
    />
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
