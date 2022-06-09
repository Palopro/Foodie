import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppScreen } from './AppScreen';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';

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
    initialRouteName={AppScreen.HomeScreen}>
    <TabNavigator.Screen
      name={AppScreen.HomeScreen}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="home" color={focused ? '#FA4A0C' : '#ADADAF'} size={28} />
        ),
      }}
    />
  </TabNavigator.Navigator>
);
