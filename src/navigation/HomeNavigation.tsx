import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppScreen } from './AppScreen';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';
import { SearchScreen } from '../presentation/screens/SearchScreen/SearchScreen';
import { FoodDetailsScreen } from '../presentation/screens/FoodDetailsScreen/FoodDetailsScreen';
import { Food } from '../domain/model/Food';
import { CartScreen } from '../presentation/screens/CartScreen/CartScreen';
import { CheckoutScreen } from '../presentation/screens/CheckoutScreen/CheckoutScreen';
import { PaymentScreen } from '../presentation/screens/CheckoutScreen/PaymentScreen';

export type HomeStackParams = {
  [AppScreen.HomeScreen]: undefined;
  [AppScreen.SearchScreen]: undefined;
  [AppScreen.FoodDetailsScreen]: { food: Food };
  [AppScreen.CartScreen]: undefined;
  [AppScreen.CheckoutScreen]: undefined;
  [AppScreen.PaymentScreen]: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export const HomeNavigation = () => (
  <HomeStack.Navigator
    initialRouteName={AppScreen.HomeScreen}
    screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name={AppScreen.HomeScreen} component={HomeScreen} />
    <HomeStack.Screen name={AppScreen.SearchScreen} component={SearchScreen} />
    <HomeStack.Screen
      name={AppScreen.FoodDetailsScreen}
      component={FoodDetailsScreen}
    />
    <HomeStack.Screen name={AppScreen.CartScreen} component={CartScreen} />
    <HomeStack.Screen
      name={AppScreen.CheckoutScreen}
      component={CheckoutScreen}
    />
    <HomeStack.Screen
      name={AppScreen.PaymentScreen}
      component={PaymentScreen}
    />
  </HomeStack.Navigator>
);
