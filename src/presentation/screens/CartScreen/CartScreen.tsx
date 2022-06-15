import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { useAppSelector } from '../../../hooks';
import { CartFood } from '../../../domain/model/CartFood';
import { CartRow } from './CartRow';
import reactotron from 'reactotron-react-native';

export const CartScreen: React.FC = () => {
  const navigation = useNavigation();
  const cart = useAppSelector(state => state.cartReducer.cart);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderRow = ({ item }: ListRenderItemInfo<CartFood>) => (
    <CartRow cartFood={item} />
  );

  const keyRow = (cartFood: CartFood) => `cart-row-${cartFood.id}`;

  reactotron.log({ cart });

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={handleGoBack} title="Cart" />

      {/*<View style={{ flex: 1 }}>*/}
      <SwipeableFlatList
        keyExtractor={keyRow}
        data={cart}
        renderItem={renderRow}
        renderQuickActions={() => null}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
      />
      {/*</View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 50,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 248, 1)',
  },
});
