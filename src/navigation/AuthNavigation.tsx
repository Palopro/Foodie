import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoardingScreen } from '../presentation/screens/OnBoardingScreen';
import { AppScreen } from './AppScreen';
import { AuthScreen } from '../presentation/screens/AuthScreen/AuthScreen';

export type AuthStackParams = {
  [AppScreen.OnBoardingScreen]: undefined;
  [AppScreen.AuthScreen]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthNavigation = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={AppScreen.OnBoardingScreen}>
    <AuthStack.Screen
      name={AppScreen.OnBoardingScreen}
      component={OnBoardingScreen}
    />
    <AuthStack.Screen name={AppScreen.AuthScreen} component={AuthScreen} />
  </AuthStack.Navigator>
);
