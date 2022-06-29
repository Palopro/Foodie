import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NoteRowProps {
  note: { id: number; title: string; desc: string };
}

export const NoteRow: React.FC<NoteRowProps> = ({ note }) => (
  <View style={styles.container}>
    <Text numberOfLines={1} style={styles.title}>
      {note.title}
    </Text>
    <Text numberOfLines={1} style={styles.desc}>
      {note.desc}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
  },
  title: {
    textAlign: 'left',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  desc: {
    textAlign: 'left',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 25,
    color: 'rgba(0, 0, 0, 1)',
  },
});
