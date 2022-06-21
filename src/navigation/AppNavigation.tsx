import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Food } from '../domain/model/Food';
import { AppScreen } from './AppScreen';
import { SplashScreen } from '../presentation/screens/SplashScreen';
import { AuthNavigation } from './AuthNavigation';
import { MainNavigation } from './MainNavigation';
import { SearchScreen } from '../presentation/screens/SearchScreen/SearchScreen';
import { FoodDetailsScreen } from '../presentation/screens/FoodDetailsScreen/FoodDetailsScreen';
import { CartScreen } from '../presentation/screens/CartScreen/CartScreen';
import { CheckoutScreen } from '../presentation/screens/CheckoutScreen/CheckoutScreen';
import { PaymentScreen } from '../presentation/screens/CheckoutScreen/PaymentScreen';

export type AppStackParams = {
  [AppScreen.SplashScreen]: undefined;
  [AppScreen.AuthNavigation]: undefined;
  [AppScreen.MainApp]: undefined;
  [AppScreen.SearchScreen]: undefined;
  [AppScreen.FoodDetailsScreen]: { food: Food };
  [AppScreen.CartScreen]: undefined;
  [AppScreen.CheckoutScreen]: undefined;
  [AppScreen.PaymentScreen]: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

export const AppNavigation = () => (
  <NavigationContainer>
    <AppStack.Navigator
      initialRouteName={AppScreen.SplashScreen}
      screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={AppScreen.SplashScreen} component={SplashScreen} />
      <AppStack.Screen
        name={AppScreen.AuthNavigation}
        component={AuthNavigation}
      />
      <AppStack.Screen name={AppScreen.MainApp} component={MainNavigation} />
      <AppStack.Screen name={AppScreen.SearchScreen} component={SearchScreen} />
      <AppStack.Screen
        name={AppScreen.FoodDetailsScreen}
        component={FoodDetailsScreen}
      />
      <AppStack.Screen name={AppScreen.CartScreen} component={CartScreen} />
      <AppStack.Screen
        name={AppScreen.CheckoutScreen}
        component={CheckoutScreen}
      />
      <AppStack.Screen
        name={AppScreen.PaymentScreen}
        component={PaymentScreen}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);
