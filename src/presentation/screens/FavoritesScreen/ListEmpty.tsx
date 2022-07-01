import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { StylingText, TextType } from '../../components/StylingText';
import heart from '../../../assets/images/heart.png';

export const ListEmpty: React.FC = () => (
  <View style={styles.container}>
    <Image
      source={heart}
      style={{
        tintColor: '#C7C7C7',
        width: 113,
        height: 113,
        resizeMode: 'contain',
      }}
    />

    <StylingText style={styles.title} textType={TextType.Bold}>
      Favorites is empty
    </StylingText>
    <StylingText style={styles.desc} textType={TextType.Regular}>
      Add new items to favorites
    </StylingText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 32,
  },
  desc: {
    marginTop: 17,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 20,
  },
});
