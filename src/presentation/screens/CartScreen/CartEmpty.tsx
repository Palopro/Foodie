import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import cart from '../../../assets/images/cart.png';

export const CartEmpty: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.imageWrapper}>
      <Image source={cart} style={styles.image} />
    </View>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Cart is empty</Text>
    </View>
    <Text style={styles.subTitle}>Add new items to cart</Text>
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
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 28,
    lineHeight: 32,
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.57)',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 17,
    lineHeight: 20,
  },
});
