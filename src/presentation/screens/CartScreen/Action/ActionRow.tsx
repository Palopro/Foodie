import React from 'react';
import { QuickAction } from './QuickAction';
import { StyleSheet, View } from 'react-native';

import { CartFood } from '../../../../domain/model/CartFood';

interface ActionRowProps {
  cartFood: CartFood;
  onFavorite: (cartFood: CartFood) => void;
  onDelete: (cartFood: CartFood) => void;
}

export const ActionRow: React.FC<ActionRowProps> = ({
  cartFood,
  onDelete,
  onFavorite,
}) => {
  const handleFavorite = () => {
    onFavorite(cartFood);
  };

  const handleDelete = () => {
    onDelete(cartFood);
  };

  return (
    <View style={styles.actionContainer}>
      <QuickAction iconName="heart-outline" onPress={handleFavorite} />
      <View style={styles.divider} />
      <QuickAction iconName="delete-outline" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    height: 102,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  divider: {
    width: 15,
  },
});
