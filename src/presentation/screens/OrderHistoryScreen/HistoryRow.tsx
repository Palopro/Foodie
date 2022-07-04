import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { OrderHistory } from '../../../domain/model/OrderHistory';
import { StylingText, TextType } from '../../components/StylingText';

interface HistoryRowProps {
  orderHistory: OrderHistory;
}

export const HistoryRow: React.FC<HistoryRowProps> = ({ orderHistory }) => {
  const qty = orderHistory.items.length;

  const total = orderHistory.items.reduce(
    (acc, food) => acc + food.price * food.qty,
    0,
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: orderHistory.items[0].photo }}
        style={styles.image}
      />
      <View style={{ marginStart: 16, justifyContent: 'space-between' }}>
        <StylingText
          textType={TextType.Bold}
          style={styles.order}
          numberOfLines={1}>{`Order #${orderHistory.id}`}</StylingText>

        <StylingText
          style={styles.qty}
          textType={TextType.Bold}>{`qty: ${qty}`}</StylingText>
        <StylingText
          style={styles.total}
          textType={TextType.Bold}>{`total: ${total.toFixed(2)}`}</StylingText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  order: {
    fontSize: 17,
    lineHeight: 20,
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 20,
    resizeMode: 'center',
  },
  qty: {
    color: '#FA4A0C',
    fontSize: 15,
    lineHeight: 18,
  },
  total: {
    color: '#FA4A0C',
    fontSize: 15,
    lineHeight: 18,
  },
});
