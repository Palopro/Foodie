import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import cart from '../../../assets/images/cart.png';
import { StylingText, TextType } from '../../components/StylingText';

export const CartEmpty: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.imageWrapper}>
      <Image source={cart} style={styles.image} />
    </View>
    <View style={styles.titleWrapper}>
      <StylingText textType={TextType.Bold} style={styles.title}>
        Cart is empty
      </StylingText>
    </View>
    <StylingText textType={TextType.Regular} style={styles.subTitle}>
      Add new items to cart
    </StylingText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    marginBottom: 5,
  },
  image: {
    width: 113,
    height: 113,
    resizeMode: 'contain',
  },
  titleWrapper: {
    marginBottom: 17,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 32,
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.57)',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 20,
  },
});
