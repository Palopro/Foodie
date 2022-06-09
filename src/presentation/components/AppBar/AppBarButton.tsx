import React from 'react';
import { Pressable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AppBarButtonProps {
  name: string;
  onPress: () => void;
  size?: number;
  color?: string;
}

const DEFAULT_SIZE = 24;

export const AppBarButton: React.FC<AppBarButtonProps> = ({
  name,
  onPress,
  size = DEFAULT_SIZE,
  color = '#000000',
}) => (
  <Pressable onPress={onPress}>
    <MaterialIcon name={name} size={size} color={color} />
  </Pressable>
);
