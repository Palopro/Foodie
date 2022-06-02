import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import React from 'react';
import {AppScreen} from './AppScreen';
import {AuthScreen} from '../screens/AuthScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, headerTitle: undefined}}
      initialRouteName={AppScreen.OnBoardingScreen}>
      <AuthStack.Screen
        name={AppScreen.OnBoardingScreen}
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={AppScreen.AuthNavigation}
        component={AuthScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
