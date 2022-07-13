import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { StylingText, TextType } from '../../components/StylingText';
import { Order } from '../../../domain/model/Order';
import { totalValue } from '../../../domain/stores/reducers/foodReducer';

interface HistoryRowProps {
  order: Order;
  onPress: (orderHistory: Order) => void;
}

export const HistoryRow: React.FC<HistoryRowProps> = ({ order, onPress }) => {
  const qty = order.items.length;
  const total = totalValue(order);

  const handlePress = () => onPress(order);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{ uri: order.items[0].photo }} style={styles.image} />
      <View style={styles.content}>
        <StylingText
          textType={TextType.Bold}
          style={styles.order}
          numberOfLines={1}>{`Order #${order.id}`}</StylingText>

        <StylingText
          style={styles.qty}
          textType={TextType.Bold}>{`qty: ${qty}`}</StylingText>
        <StylingText
          style={styles.total}
          textType={TextType.Bold}>{`total: ${total.toFixed(2)}`}</StylingText>
      </View>
    </TouchableOpacity>
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
  content: {
    marginStart: 16,
    justifyContent: 'space-between',
  },
});
