import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppScreen } from './AppScreen';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';
import { SearchScreen } from '../presentation/screens/SearchScreen/SearchScreen';
import { FoodDetailsScreen } from '../presentation/screens/FoodDetailsScreen/FoodDetailsScreen';
import { Food } from '../domain/model/Food';

export type HomeStackParams = {
  [AppScreen.HomeScreen]: undefined;
  [AppScreen.SearchScreen]: undefined;
  [AppScreen.FoodDetailsScreen]: { food: Food };
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
  </HomeStack.Navigator>
);
