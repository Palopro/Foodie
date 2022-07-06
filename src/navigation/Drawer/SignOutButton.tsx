import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SignOutButton: React.FC<TouchableOpacityProps> = props => (
  <TouchableOpacity {...props} style={styles.signOut}>
    <Text style={styles.signOutText}>Sign-out</Text>
    <Icon name={'arrow-forward'} color="#FFFFFF" size={25} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signOutText: {
    fontSize: 17,
    lineHeight: 25,
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#FFFFFF',
    marginEnd: 12,
  },
});
