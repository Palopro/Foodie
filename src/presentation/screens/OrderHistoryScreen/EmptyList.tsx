import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { StylingText, TextType } from '../../components/StylingText';
import orderHistory from '../../../assets/images/orderHistory.png';

export const EmptyList: React.FC = () => (
  <View style={styles.container}>
    <Image source={orderHistory} />
    <StylingText style={styles.title} textType={TextType.Bold}>
      No history yet
    </StylingText>
    <StylingText style={styles.desc} textType={TextType.Regular}>
      Hit the orange button down below to Create an order
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
    marginTop: 26,
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
  },
  desc: {
    marginTop: 26,
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
});
