import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppScreen } from './AppScreen';
import { MainNavigation } from './MainNavigation';
import { useAppSelector } from '../hooks';
import { AuthNavigation } from './AuthNavigation';

export type RootStackParams = {
  [AppScreen.MainNavigation]: undefined;
  [AppScreen.AuthNavigation]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootNavigation = () => {
  const user = useAppSelector(state => state.authReducer.user);

  return (
    <RootStack.Navigator
      initialRouteName={
        user ? AppScreen.MainNavigation : AppScreen.AuthNavigation
      }
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={AppScreen.MainNavigation}
        component={MainNavigation}
      />
      <RootStack.Screen
        name={AppScreen.AuthNavigation}
        component={AuthNavigation}
      />
    </RootStack.Navigator>
  );
};
