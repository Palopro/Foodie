import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { LoginScreen } from './LoginScreen';
import { SignUpScreen } from './SignUpScreen';
import logo from '../../../assets/images/BellaLogo.png';
import { AuthTabBar } from './AuthTabBar';

const renderScene = SceneMap({
  Login: LoginScreen,
  SignUp: SignUpScreen,
});

const routes = [
  {
    key: 'Login',
    title: 'Login',
  },
  {
    key: 'SignUp',
    title: 'Sign-up',
  },
];

export const AuthScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'#FFFFFF'}
        animated
      />

      <View style={styles.imageWrapper}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.tabWrapper}>
        <TabView
          renderTabBar={props => <AuthTabBar {...props} />}
          onIndexChange={setSelectedTab}
          navigationState={{ index: selectedTab, routes }}
          renderScene={renderScene}
          swipeEnabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 128,
    marginBottom: 48,
  },
  image: {
    width: 130,
    height: 162,
    resizeMode: 'contain',
  },
  tabWrapper: {
    flex: 1,
    flexGrow: 1,
  },
});
