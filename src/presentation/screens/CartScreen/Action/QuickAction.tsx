import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface QuickActionProps {
  iconName: string;
  onPress: () => void;
}

export const QuickAction: React.FC<QuickActionProps> = ({
  iconName,
  onPress,
}) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Icon name={iconName} color="#FFFFFF" size={20} />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(223, 44, 44, 1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
