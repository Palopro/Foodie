import React from 'react';
import { AppScreen } from './AppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type MainAppTabParams = {
  [AppScreen.HomeScreen]: undefined;
};

const TabNavigator = createBottomTabNavigator<MainAppTabParams>();

export const MainNavigation = () => (
  <TabNavigator.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#F2F2F2',
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
