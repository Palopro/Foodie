import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import bellaLogo from '../assets/images/BellaLogo.png';
import guys from '../assets/images/Group67.png';
import { RoundButton } from '../components/RoundButton';

export const OnBoardingScreen = () => {
  const handlePress = () => {
    //TODO: handle press
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <View style={styles.circleLogo}>
          <Image source={bellaLogo} />
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Food for Everyone</Text>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={guys} style={styles.mainImage} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundButton text={'Get started'} onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
  },
  logoWrapper: {
    marginHorizontal: 48,
  },
  circleLogo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    marginTop: 32,
  },
  title: {
    fontSize: 56,
    color: '#FFFFFF',
    letterSpacing: -0.03,
    fontWeight: '700',
    textAlign: 'left',
  },
  imageWrapper: {
    flex: 1,
  },
  mainImage: {
    marginTop: 36,
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
