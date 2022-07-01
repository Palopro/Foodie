import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FavoriteButtonProps {
  onPress?: () => void;
  isFavorite: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  onPress,
  isFavorite,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon
      name={isFavorite ? 'heart' : 'heart-outline'}
      size={24}
      color="#000000"
    />
  </TouchableOpacity>
);
