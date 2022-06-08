import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from './AppScreen';
import { HomeStackNavigation } from './HomeStackNavigation';

export type MainAppTabParams = {
  [AppScreen.HomeScreen]: undefined;
};

const TabNavigator = createBottomTabNavigator<MainAppTabParams>();

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
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name={'home'}
            color={focused ? '#FA4A0C' : '#ADADAF'}
            size={28}
          />
        ),
      }}
    />
  </TabNavigator.Navigator>
);
