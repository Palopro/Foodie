import React from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { LoginScreen } from '../presentation/screens/AuthScreen/LoginScreen';
import { SignUpScreen } from '../presentation/screens/AuthScreen/SignUpScreen';
import logo from '../assets/images/BellaLogo.png';

const AuthTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window');

export const AuthTabs = () => (
  <>
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor="#FFFFFF"
      animated
    />
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={logo} style={styles.image} />
      </View>

      <AuthTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FA4A0C',
          tabBarInactiveTintColor: '#ADADAF',
          swipeEnabled: false,
          tabBarStyle: {
            borderBottomStartRadius: 30,
            borderBottomEndRadius: 30,
            backgroundColor: '#FFFFFF',
          },
          tabBarIndicatorStyle: {
            height: 3,
            borderRadius: 12,
            backgroundColor: '#FA4A0C',
            width: width / 2 - 100,
            marginHorizontal: 50,
          },
          tabBarLabelStyle: {
            color: 'rgba(0, 0, 0, 1)',
            fontStyle: 'normal',
            fontSize: 18,
            lineHeight: 21,
            textAlign: 'center',
            fontWeight: '700',
            fontFamily: 'RobotoCondensed-Bold',
            textTransform: 'capitalize',
          },
        }}>
        <AuthTab.Screen name={'Login'} component={LoginScreen} />
        <AuthTab.Screen name={'SignUp'} component={SignUpScreen} />
      </AuthTab.Navigator>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  imageWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
  },
  image: {
    width: 130,
    height: 162,
    resizeMode: 'contain',
  },
});
