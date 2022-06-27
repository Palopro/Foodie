import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

interface FavoriteButtonProps {
  onPress?: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="heart-outline" size={24} color="#000000" />
  </TouchableOpacity>
);
