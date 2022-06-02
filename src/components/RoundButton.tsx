import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
};

const RoundButton: React.FC<Props> = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 112,
  },
  text: {
    color: '#FF460A',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
});

export default RoundButton;