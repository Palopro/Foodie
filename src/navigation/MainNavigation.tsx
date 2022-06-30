import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from './AppScreen';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';
import { FavoritesScreen } from '../presentation/screens/FavoritesScreen/FavoritesScreen';

export type MainAppTabParams = {
  [AppScreen.HomeScreen]: undefined;
  [AppScreen.FavoritesScreen]: undefined;
};

const TabNavigator = createBottomTabNavigator<MainAppTabParams>();

const renderTabIcon =
  (name: string) =>
    ({ color }: { color: string }) =>
      <Icon name={name} color={color} size={28} />;

const tabOptions = {
  [AppScreen.HomeScreen]: {
    tabBarIcon: renderTabIcon('home'),
  },
  [AppScreen.FavoritesScreen]: {
    tabBarIcon: renderTabIcon('favorite-outline'),
  },
};

export const MainNavigation = () => (
  <TabNavigator.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#F2F2F2',
        borderTopWidth: 0,
      },
      headerShown: false,
      tabBarActiveTintColor: '#FA4A0C',
      tabBarInactiveTintColor: '#ADADAF',
      tabBarShowLabel: false,
    }}
    initialRouteName={AppScreen.HomeScreen}>
    <TabNavigator.Screen
      name={AppScreen.HomeScreen}
      component={HomeScreen}
      options={tabOptions[AppScreen.HomeScreen]}
    />
    <TabNavigator.Screen
      name={AppScreen.FavoritesScreen}
      component={FavoritesScreen}
      options={tabOptions[AppScreen.FavoritesScreen]}
    />
  </TabNavigator.Navigator>
);
