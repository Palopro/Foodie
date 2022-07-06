import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';

import { AppBar } from '../../components/AppBar/AppBar';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { AppScreen } from '../../../navigation/AppScreen';
import { StylingText, TextType } from '../../components/StylingText';
import { PaymentOptions } from '../CheckoutScreen/PaymentOptions';
import { useAppSelector } from '../../../hooks';

interface OptionValue {
  id: number;
  name: string;
  value: string;
}

export const ProfileScreen: React.FC<
  NativeStackScreenProps<MainAppTabParams>
> = ({ navigation }) => {
  const paymentOptions = useAppSelector(
    ({ authReducer }) => authReducer.paymentOptions,
  );

  const [payment, setPayment] = useState(paymentOptions[0]);

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleCartPress = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const handleChangePayment = (option: OptionValue) => {
    setPayment(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <AppBar onMenuPress={handleMenu} onCartPress={handleCartPress} />
      <View style={styles.titleWrapper}>
        <StylingText style={styles.title} textType={TextType.Bold}>
          Profile
        </StylingText>
      </View>

      <View style={styles.informationContainer}>
        <StylingText style={styles.infoTitle} textType={TextType.Bold}>
          Information
        </StylingText>

        <View style={styles.infoContainer}>
          <View style={styles.image} />

          <View style={styles.content}>
            <View style={styles.usernameRow}>
              <StylingText textType={TextType.Bold} style={styles.username}>
                Marvis Ighedosa
              </StylingText>

              <Icon name={'edit'} size={21} color="#000000" />
            </View>
            <StylingText style={styles.email} textType={TextType.Regular}>
              dosamarvis@gmail.com
            </StylingText>
            <StylingText style={styles.address} textType={TextType.Regular}>
              No 15 uti street off ovie palace road effurun delta state
            </StylingText>
          </View>
        </View>
      </View>

      <View style={styles.paymentContainer}>
        <StylingText style={styles.infoTitle} textType={TextType.Bold}>
          Payment method
        </StylingText>

        <View style={[styles.infoContainer, { paddingVertical: 0 }]}>
          <PaymentOptions
            options={paymentOptions}
            selectedOption={payment}
            onChangeOption={handleChangePayment}
          />
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
    marginTop: 12,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 9,
  },
  content: {
    flex: 1,
    marginStart: 15,
  },
  username: {
    fontSize: 18,
    lineHeight: 21,
  },
  email: {
    fontSize: 13,
    lineHeight: 15,
    marginTop: 10,
  },
  address: {
    fontSize: 13,
    lineHeight: 15,
    marginTop: 10,
  },
  informationContainer: {
    paddingHorizontal: 50,
    marginTop: 66,
  },
  paymentContainer: {
    paddingHorizontal: 50,
    marginTop: 48,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
