import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppScreen } from '../../navigation/AppScreen';
import logo from '../../assets/images/SplashScreen.png';
import { AppStackParams } from '../../navigation/AppNavigation';

export const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  const redirectToScreen = async () => {
    const token = await AsyncStorage.getItem('jwt');

    navigation.navigate(token ? AppScreen.MainApp : AppScreen.AuthNavigation);
  };

  useEffect(() => {
    redirectToScreen();
  }, []);

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
