import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import SplashScreen from '../screens/SplashScreen';
import AuthNavigation from './AuthNavigation';
import {AppScreen} from './AppScreen';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={AppScreen.SplashScreen}
        screenOptions={{headerShown: false}}>
        <AppStack.Screen
          name={AppScreen.SplashScreen}
          component={SplashScreen}
        />
        <AppStack.Screen
          name={AppScreen.AuthNavigation}
          component={AuthNavigation}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
