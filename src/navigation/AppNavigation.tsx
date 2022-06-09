import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from '../presentation/screens/SplashScreen';
import { AuthNavigation } from './AuthNavigation';
import { AppScreen } from './AppScreen';
import { MainNavigation } from './MainNavigation';
import { SearchScreen } from '../presentation/screens/SearchScreen/SearchScreen';

export type AppStackParams = {
  [AppScreen.SplashScreen]: undefined;
  [AppScreen.AuthNavigation]: undefined;
  [AppScreen.MainApp]: undefined;
  [AppScreen.SearchScreen]: undefined;
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
      <AppStack.Screen name={AppScreen.MainApp} component={MainNavigation} />
      <AppStack.Screen name={AppScreen.SearchScreen} component={SearchScreen} />
    </AppStack.Navigator>
  </NavigationContainer>
);
