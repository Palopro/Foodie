import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppScreen } from './AppScreen';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';
import { SearchScreen } from '../presentation/screens/SearchScreen';

export type HomeStackParams = {
  [AppScreen.HomeScreen]: undefined;
  [AppScreen.SearchScreen]: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigation = () => (
  <HomeStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={AppScreen.HomeScreen}>
    <HomeStack.Screen name={AppScreen.HomeScreen} component={HomeScreen} />
    <HomeStack.Screen name={AppScreen.SearchScreen} component={SearchScreen} />
  </HomeStack.Navigator>
);
