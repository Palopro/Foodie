import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from '../AppScreen';

interface DrawerItemProps {
  icon: string;
  label: string;
  screen: AppScreen;
}

export const DrawerItem: React.FC<DrawerItemProps> = ({ icon, label }) => (
  <View style={styles.container}>
    <Icon name={icon} size={25} color="#FFFFFF" />
    <Text style={styles.title}>{label}</Text>
  </View>
);

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
