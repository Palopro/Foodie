import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import bellaLogo from '../assets/images/BellaLogo.png';
import guys from '../assets/images/Group67.png';
import RoundButton from '../components/RoundButton';
import {useNavigation} from '@react-navigation/native';
import {AppScreen} from '../navigation/AppScreen';

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(AppScreen.AuthNavigation);
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
      <View style={{flex: 1}}>
        <Image
          source={guys}
          style={{
            marginTop: 36,
            height: '100%',
            width: '100%',
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
});

export default OnBoardingScreen;
