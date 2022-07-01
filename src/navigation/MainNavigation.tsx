import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeScreen } from '../presentation/screens/HomeScreen/HomeScreen';
import { FavoritesScreen } from '../presentation/screens/FavoritesScreen/FavoritesScreen';

enum TabRoutes {
  Home = 'HomeScreen',
  Favorites = 'FavoritesScreen',
}

export type MainAppTabParams = {
  [TabRoutes.Home]: undefined;
  [TabRoutes.Favorites]: undefined;
};

const icons: { [key in TabRoutes]: any } = {
  [TabRoutes.Home]: 'home',
  [TabRoutes.Favorites]: 'favorite-outline',
};

const TabNavigator = createBottomTabNavigator<MainAppTabParams>();

export const MainNavigation = () => (
  <TabNavigator.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: '#F2F2F2',
        borderTopWidth: 0,
      },
      headerShown: false,
      tabBarActiveTintColor: '#FA4A0C',
      tabBarInactiveTintColor: '#ADADAF',
      tabBarShowLabel: false,
      tabBarIcon: ({ color }) => (
        <Icon name={icons[route.name]} color={color} size={28} />
      ),
    })}
    initialRouteName={TabRoutes.Home}>
    <TabNavigator.Screen name={TabRoutes.Home} component={HomeScreen} />
    <TabNavigator.Screen
      name={TabRoutes.Favorites}
      component={FavoritesScreen}
    />
  </TabNavigator.Navigator>
);
