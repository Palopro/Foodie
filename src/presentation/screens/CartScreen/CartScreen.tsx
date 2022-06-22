import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
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
import { CartEmpty } from './CartEmpty';
import { foodCartReducer } from '../../../domain/stores/reducers/foodCartReducer';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { QuickAction } from './QuickAction';
import { AppScreen } from '../../../navigation/AppScreen';
import { HomeStackParams } from '../../../navigation/HomeNavigation';

export const CartScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParams>>();
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

  const handleCheckout = () => {
    navigation.navigate(AppScreen.CheckoutScreen);
  };

  const handleDelete = (cartItem: CartFood) => {
    dispatch(foodCartReducer.actions.removeFromCart({ cartItem }));
  };

  const handleFavorite = (cartFood: CartFood) => {};

  const renderActions = ({ item }: { item: CartFood }) => (
    <View style={styles.actionContainer}>
      <QuickAction
        iconName="heart-outline"
        onPress={() => handleFavorite(item)}
      />
      <View style={styles.divider} />
      <QuickAction
        iconName="delete-outline"
        onPress={() => handleDelete(item)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={handleGoBack} title="Cart" />

      <SwipeableFlatList
        keyExtractor={keyRow}
        data={cart}
        extraData={cart}
        renderItem={renderRow}
        renderQuickActions={renderActions}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={CartEmpty}
        contentContainerStyle={[
          styles.contentContainer,
          { flex: cart.length === 0 ? 1 : undefined },
        ]}
        maxSwipeDistance={150}
      />

      <View style={styles.buttonWrapper}>
        <RoundButton
          text="Checkout"
          disabled={cart.length === 0}
          onPress={handleCheckout}
          colorType={ColorType.Orange}
        />
      </View>
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
  actionContainer: {
    height: 102,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  divider: {
    width: 15,
  },
  separator: {
    height: 14,
  },
  buttonWrapper: {
    paddingHorizontal: 50,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
