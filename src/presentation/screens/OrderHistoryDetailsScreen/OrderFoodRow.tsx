import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { OrderHistoryFood } from '../../../domain/model/OrderHistoryFood';
import { StylingText, TextType } from '../../components/StylingText';

interface OrderFoodRow {
  orderHistoryFood: OrderHistoryFood;
}

export const OrderFoodRow: React.FC<OrderFoodRow> = ({ orderHistoryFood }) => (
  <View style={styles.container}>
    <Image source={{ uri: orderHistoryFood.photo }} style={styles.photo} />
    <View style={styles.content}>
      <StylingText
        textType={TextType.Bold}
        numberOfLines={1}
        style={styles.name}>
        {orderHistoryFood.name}
      </StylingText>
      <View style={styles.priceWrapper}>
        <StylingText
          textType={TextType.Regular}
          numberOfLines={1}
          style={styles.price}>
          {orderHistoryFood.price.toFixed(2)}
        </StylingText>
      </View>
    </View>

    <View style={styles.qtyView}>
      <StylingText textType={TextType.Bold} style={styles.qtyText}>
        {orderHistoryFood.qty}
      </StylingText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 50,
    height: 102,
  },
  photo: {
    width: 77,
    height: 77,
    resizeMode: 'center',
    borderRadius: 100,
  },
  content: {
    marginStart: 15,
  },
  name: {
    fontSize: 17,
    lineHeight: 20,
  },
  priceWrapper: {
    marginTop: 12,
  },
  price: {
    color: 'rgba(250, 74, 12, 1)',
    fontSize: 15,
    lineHeight: 18,
  },
  qtyContainer: {
    position: 'absolute',
    bottom: 18,
    right: 24,
  },
  qtyView: {
    position: 'absolute',
    bottom: 18,
    right: 24,
    backgroundColor: '#FA4A0C',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  qtyText: {
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
