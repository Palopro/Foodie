import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppScreen} from './AppScreen';
import {SignUpScreen} from '../presentation/screens/AuthScreen/SignUpScreen';
import {LoginScreen} from '../presentation/screens/AuthScreen/LoginScreen';

const AuthTab = createMaterialTopTabNavigator();

export const AuthTabs = () => (
  <AuthTab.Navigator initialRouteName={AppScreen.LoginScreen}>
    <AuthTab.Screen name={AppScreen.LoginScreen} component={LoginScreen} />
    <AuthTab.Screen name={AppScreen.SignUpScreen} component={SignUpScreen} />
  </AuthTab.Navigator>
);
