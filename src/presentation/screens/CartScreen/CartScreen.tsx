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
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CartFood } from '../../../domain/model/CartFood';
import { CartRow } from './CartRow';
import reactotron from 'reactotron-react-native';
import { CartEmpty } from './CartEmpty';
import { foodCartReducer } from '../../../domain/stores/reducers/foodCartReducer';

export const CartScreen: React.FC = () => {
  const navigation = useNavigation();
  const cart = useAppSelector(state => state.cartReducer.cart);
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleIncrementQty = (cartItem: CartFood) => {
    dispatch(foodCartReducer.actions.incrementCartFoodQty({ cartItem }));
  };

  const handleDecrementQty = (cartItem: CartFood) => {
    dispatch(foodCartReducer.actions.decrementCartFoodQty({ cartItem }));
  };

  const renderRow = ({ item }: ListRenderItemInfo<CartFood>) => (
    <CartRow
      cartFood={item}
      onIncrementQty={handleIncrementQty}
      onDecrementQty={handleDecrementQty}
    />
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
        extraData={cart}
        renderItem={renderRow}
        renderQuickActions={() => null}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        ListEmptyComponent={CartEmpty}
        contentContainerStyle={{ flex: cart.length === 0 ? 1 : undefined }}
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
