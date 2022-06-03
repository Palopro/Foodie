import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { LoginScreen } from '../LoginScreen';
import { SignUpScreen } from '../SignUpScreen';
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
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'#FFFFFF'}
        animated
      />
      <View style={styles.topContainer}>
        <View style={styles.imageWrapper}>
          <Image source={logo} style={styles.image} />
        </View>
      </View>
      <View style={styles.tabWrapper}>
        <TabView
          renderTabBar={props => <AuthTabBar {...props} />}
          onIndexChange={setIndex}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          initialLayout={{ width: layout.width }}
          swipeEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
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
  },
});
