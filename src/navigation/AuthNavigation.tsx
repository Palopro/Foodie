import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import React from 'react';
import AppScreen from './AppScreen';

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
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
