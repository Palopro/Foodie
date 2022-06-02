import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnBoardingScreen} from '../screens/OnBoardingScreen';
import {AppScreen} from './AppScreen';

export type AuthStackParams = {
  [AppScreen.OnBoardingScreen]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthNavigation = () => (
  <AuthStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={AppScreen.OnBoardingScreen}>
    <AuthStack.Screen
      name={AppScreen.OnBoardingScreen}
      component={OnBoardingScreen}
    />
  </AuthStack.Navigator>
);
