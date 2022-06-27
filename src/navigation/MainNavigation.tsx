import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from './AppScreen';
import { HomeNavigation } from './HomeNavigation';
import { FavoritesScreen } from '../presentation/screens/FavoritesScreen/FavoritesScreen';

export type MainAppTabParams = {
  [AppScreen.HomeStack]: undefined;
  [AppScreen.FavoritesScreen]: undefined;
};

const TabNavigator = createBottomTabNavigator<MainAppTabParams>();

const renderTabIcon =
  (name: string) =>
    ({ color }: { color: string }) =>
      <Icon name={name} color={color} size={28} />;

const tabOptions = {
  [AppScreen.HomeStack]: {
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
    initialRouteName={AppScreen.HomeStack}>
    <TabNavigator.Screen
      name={AppScreen.HomeStack}
      component={HomeNavigation}
      options={tabOptions[AppScreen.HomeStack]}
    />
    <TabNavigator.Screen
      name={AppScreen.FavoritesScreen}
      component={FavoritesScreen}
      options={tabOptions[AppScreen.FavoritesScreen]}
    />
  </TabNavigator.Navigator>
);
