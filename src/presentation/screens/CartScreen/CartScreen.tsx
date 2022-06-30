import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CartFood } from '../../../domain/model/CartFood';
import { foodCartReducer } from '../../../domain/stores/reducers/foodCartReducer';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { AppScreen } from '../../../navigation/AppScreen';
import { RootStackParams } from '../../../navigation/RootNavigation';
import { SwipeableList } from './SwipeableList/SwipeableList';
import { CartEmpty } from './CartEmpty';

export const CartScreen: React.FC<NativeStackScreenProps<RootStackParams>> = ({
  navigation,
}) => {
  const cart = useAppSelector(state => state.cartReducer.cart);
  const dispatch = useAppDispatch();

  const handleIncrementQty = (cartItem: CartFood) => {
    dispatch(foodCartReducer.actions.incrementCartFoodQty({ cartItem }));
  };

  const handleDecrementQty = (cartItem: CartFood) => {
    dispatch(foodCartReducer.actions.decrementCartFoodQty({ cartItem }));
  };

  const handleCheckout = () => {
    navigation.navigate(AppScreen.CheckoutScreen);
  };

  const handleDelete = (cartItem: CartFood) => {
    dispatch(foodCartReducer.actions.removeFromCart({ cartItem }));
  };

  const handleFavorite = (cartFood: CartFood) => {
    //TODO: favorite feature
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={navigation.goBack} title="Cart" />

      <SwipeableList
        data={cart}
        onFavorite={handleFavorite}
        onDelete={handleDelete}
        onDecrementQty={handleDecrementQty}
        onIncrementQty={handleIncrementQty}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={CartEmpty}
        contentContainerStyle={[
          styles.contentContainer,
          { flex: cart.length === 0 ? 1 : undefined },
        ]}
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
