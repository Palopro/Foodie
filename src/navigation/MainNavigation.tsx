import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from './AppScreen';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';

export type MainAppTabParams = {
  [AppScreen.HomeScreen]: undefined;
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
  </TabNavigator.Navigator>
);
