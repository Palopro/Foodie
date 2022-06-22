import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NoteRowProps {
  note: { id: number; title: string; desc: string };
}

export const NoteRow: React.FC<NoteRowProps> = ({ note }) => (
  <View style={styles.container}>
    <Text>{note.title}</Text>
    <Text>{note.desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
  },
});
