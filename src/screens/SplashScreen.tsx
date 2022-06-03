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

export const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    Splash.hide();

    navigation.navigate(AppScreen.AuthNavigation);
  });

  return (
    <>
      <StatusBar barStyle={'light-content'} animated />
      <ImageBackground source={logo} style={styles.container}>
        <View style={styles.loaderWrapper}>
          <ActivityIndicator animating color={'#FF240C'} size={28} />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderWrapper: {
    marginTop: 140,
  },
});
