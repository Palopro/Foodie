import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppScreen } from './AppScreen';
import { MainNavigation } from './MainNavigation';
import { useAppSelector } from '../hooks';
import { AuthNavigation } from './AuthNavigation';
import { SearchScreen } from '../presentation/screens/SearchScreen/SearchScreen';
import { FoodDetailsScreen } from '../presentation/screens/FoodDetailsScreen/FoodDetailsScreen';
import { CartScreen } from '../presentation/screens/CartScreen/CartScreen';
import { CheckoutScreen } from '../presentation/screens/CheckoutScreen/CheckoutScreen';
import { PaymentScreen } from '../presentation/screens/CheckoutScreen/PaymentScreen';
import { Food } from '../domain/model/Food';

export type RootStackParams = {
  [AppScreen.MainNavigation]: undefined;
  [AppScreen.AuthNavigation]: undefined;
  [AppScreen.SearchScreen]: undefined;
  [AppScreen.FoodDetailsScreen]: { food: Food };
  [AppScreen.CartScreen]: undefined;
  [AppScreen.CheckoutScreen]: undefined;
  [AppScreen.PaymentScreen]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootNavigation = () => {
  const user = useAppSelector(state => state.authReducer.user);

  return (
    <RootStack.Navigator
      initialRouteName={
        user ? AppScreen.MainNavigation : AppScreen.AuthNavigation
      }
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={AppScreen.MainNavigation}
        component={MainNavigation}
      />
      <RootStack.Screen
        name={AppScreen.AuthNavigation}
        component={AuthNavigation}
      />

      <RootStack.Screen
        name={AppScreen.SearchScreen}
        component={SearchScreen}
      />
      <RootStack.Screen
        name={AppScreen.FoodDetailsScreen}
        component={FoodDetailsScreen}
      />
      <RootStack.Screen name={AppScreen.CartScreen} component={CartScreen} />
      <RootStack.Screen
        name={AppScreen.CheckoutScreen}
        component={CheckoutScreen}
      />
      <RootStack.Screen
        name={AppScreen.PaymentScreen}
        component={PaymentScreen}
      />
    </RootStack.Navigator>
  );
};
