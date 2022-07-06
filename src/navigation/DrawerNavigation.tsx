import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainNavigation } from './MainNavigation';
import { DrawerContent } from './Drawer/DrawerContent';
import { AppScreen } from './AppScreen';

export type DrawerParams = {
  MainNavigation: undefined;
};

const DrawerNav = createDrawerNavigator<DrawerParams>();

export const DrawerNavigation = () => (
  <DrawerNav.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      drawerType: 'slide',
      headerShown: false,
      overlayColor: 'transparent',
    }}>
    <DrawerNav.Screen
      name={AppScreen.MainNavigation}
      component={MainNavigation}
    />
  </DrawerNav.Navigator>
);
