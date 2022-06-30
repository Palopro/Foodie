import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface AppBarWithTitleProps {
  onBackPress: () => void;
  title: string;
}

const SIZE = 24;

export const AppBarWithTitle: React.FC<AppBarWithTitleProps> = ({
  onBackPress,
  title,
}) => (
  <View style={styles.container}>
    <View style={styles.backButton}>
      <Pressable onPress={onBackPress}>
        <MaterialIcon name="arrow-back-ios" size={SIZE} color="#000000" />
      </Pressable>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.empty} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(245, 245, 248, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 25,
    position: 'relative',
    width: '100%',
  },
  backButton: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 18,
    lineHeight: 21,
    color: 'rgba(0, 0, 0, 1)',
  },
  empty: {
    flex: 1,
  },
});
