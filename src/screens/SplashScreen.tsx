import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Splash from 'react-native-splash-screen';

import logo from '../assets/images/SplashScreen.png';
import {AppScreen} from '../navigation/AppScreen';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    Splash.hide();

    setTimeout(() => {
      navigation.navigate(AppScreen.AuthNavigation);
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={logo} style={styles.container}>
      <View style={{marginTop: 140}}>
        <ActivityIndicator animating color={'#FF240C'} size={28} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'rgb(251, 251, 251)',
    borderRadius: 600,
    width: 260,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  textWrapper: {},
  text: {
    color: '#FA4A0C',
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 0.04,
    fontWeight: '700',
  },
  indicator: {
    marginTop: 24,
  },
});

export default SplashScreen;
