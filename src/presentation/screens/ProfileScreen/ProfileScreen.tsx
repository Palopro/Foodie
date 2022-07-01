import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBar } from '../../components/AppBar/AppBar';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { AppScreen } from '../../../navigation/AppScreen';
import { StylingText, TextType } from '../../components/StylingText';

export const ProfileScreen: React.FC<
NativeStackScreenProps<MainAppTabParams>
> = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <AppBar onMenuPress={navigation.goBack} onCartPress={handleCartPress} />
      <View style={styles.titleWrapper}>
        <StylingText style={styles.title} textType={TextType.Bold}>
          Profile
        </StylingText>
      </View>

      <View>
        <StylingText style={styles.infoTitle} textType={TextType.Bold}>
          Information
        </StylingText>

        <View style={styles.infoContainer}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: 'red',
              borderRadius: 10,
            }}
          />

          <View style={{ flex: 1, marginStart: 15, marginEnd: 9 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <StylingText textType={TextType.Bold} style={styles.username}>
                Marvis Ighedosa
              </StylingText>

              <View style={{ width: 17, height: 17, backgroundColor: 'red' }} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  titleWrapper: {
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 34,
    letterSpacing: -0.03,
    lineHeight: 40,
  },
  infoTitle: {
    fontSize: 17,
    lineHeight: 20,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  username: {
    fontSize: 18,
    lineHeight: 21,
  },
});
