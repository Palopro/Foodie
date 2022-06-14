import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface AppBarSearchProps {
  onBackPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const SIZE = 24;

export const AppBarSearch: React.FC<AppBarSearchProps> = ({
  onBackPress,
  children,
  style,
}) => (
  <View style={[styles.container, style]}>
    <Pressable onPress={onBackPress}>
      <MaterialIcon name={'arrow-back-ios'} size={SIZE} color={'#000000'} />
    </Pressable>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 25,
    position: 'relative',
    width: '100%',
  },
});
