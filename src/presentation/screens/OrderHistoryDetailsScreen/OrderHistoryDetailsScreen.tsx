import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParams } from '../../../navigation/RootNavigation';
import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { StylingText, TextType } from '../../components/StylingText';
import { OrderHistoryFood } from '../../../domain/model/OrderHistoryFood';
import { OrderFoodRow } from './OrderFoodRow';

interface Props extends NativeStackScreenProps<RootStackParams> {}

export const OrderHistoryDetailsScreen: React.FC<Props> = ({
  route,
  navigation,
}) => {
  const { orderHistory } = route.params;

  const renderListRow = ({ item }: ListRenderItemInfo<OrderHistoryFood>) => (
    <OrderFoodRow orderHistoryFood={item} />
  );

  const renderHeader = () => <View style={styles.header} />;

  const total = orderHistory.items.reduce(
    (acc, food) => acc + food.price * food.qty,
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={navigation.goBack} title="Order Details" />
      <View style={styles.detailContainer}>
        <StylingText textType={TextType.Bold} style={styles.title}>
          {`Order #${orderHistory.id}`}
        </StylingText>

        <StylingText textType={TextType.Regular} style={styles.text}>
          {`phone number: ${orderHistory!.phone}`}
        </StylingText>

        <StylingText textType={TextType.Regular} style={styles.text}>
          {`Address: ${orderHistory!.address}`}
        </StylingText>

        <StylingText textType={TextType.Regular} style={styles.text}>
          {`Delivery method: ${orderHistory!.deliveryMethod}`}
        </StylingText>

        <StylingText textType={TextType.Regular} style={styles.text}>
          {`Payment method: ${orderHistory!.paymentMethod}`}
        </StylingText>

        <StylingText textType={TextType.Regular} style={styles.text}>
          {`Payment method: ${orderHistory!.paymentMethod}`}
        </StylingText>

        <StylingText textType={TextType.Regular} style={styles.text}>
          {`Total price: ${total!.toFixed(2)}`}
        </StylingText>
      </View>

      <FlatList
        scrollEventThrottle={16}
        ListHeaderComponent={renderHeader}
        data={orderHistory.items}
        renderItem={renderListRow}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  detailContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 50,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingTop: 24,
    paddingBottom: 19,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
  },
  text: {
    marginTop: 9,
  },
  header: {
    height: 14,
  },
});
