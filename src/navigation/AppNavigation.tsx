import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from '../presentation/screens/SplashScreen';
import { AuthNavigation } from './AuthNavigation';
import { AppScreen } from './AppScreen';

export type AppStackParams = {
  [AppScreen.SplashScreen]: undefined;
  [AppScreen.AuthNavigation]: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

export const AppNavigation = () => (
  <NavigationContainer>
    <AppStack.Navigator
      initialRouteName={AppScreen.SplashScreen}
      screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={AppScreen.SplashScreen} component={SplashScreen} />
      <AppStack.Screen
        name={AppScreen.AuthNavigation}
        component={AuthNavigation}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);
