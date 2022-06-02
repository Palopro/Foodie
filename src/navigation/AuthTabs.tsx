import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppScreen} from './AppScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {LoginScreen} from '../screens/LoginScreen';

const AuthTab = createMaterialTopTabNavigator();

export const AuthTabs = () => (
  <AuthTab.Navigator initialRouteName={AppScreen.LoginScreen}>
    <AuthTab.Screen name={AppScreen.LoginScreen} component={LoginScreen} />
    <AuthTab.Screen name={AppScreen.SignUpScreen} component={SignUpScreen} />
  </AuthTab.Navigator>
);
