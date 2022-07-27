import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from '../AppScreen';

interface DrawerItemProps {
  icon: string;
  label: string;
  screen: AppScreen;
  onPress: (screen: AppScreen) => void;
}

export const DrawerItem: React.FC<DrawerItemProps> = ({
  icon,
  label,
  screen,
  onPress,
}) => {
  const handlePress = () => {
    onPress(screen);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Icon name={icon} size={25} color="#FFFFFF" />
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 26,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    marginStart: 13,
  },
});
