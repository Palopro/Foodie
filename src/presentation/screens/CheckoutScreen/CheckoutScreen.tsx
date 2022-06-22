import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { OptionSelect } from '../../components/OptionSelect/OptionSelect';
import { totalInCart } from '../../../domain/stores/reducers/foodCartReducer';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { AppScreen } from '../../../navigation/AppScreen';
import { HomeStackParams } from '../../../navigation/HomeNavigation';

const options = [
  { id: 1, name: 'Door delivery', value: 'DoorDelivery' },
  { id: 2, name: 'Pick up', value: 'pickUp' },
];

export const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParams>>();
  const [deliveryMethod, setDeliveryMethod] = useState(options[0]);

  const total = useSelector(totalInCart);

  const { data: user } = foodieApi.useMeQuery();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeOption = (optionValue: { id: number; name: string }) => {
    setDeliveryMethod(optionValue);
  };

  const handlePayment = () => {
    navigation.navigate(AppScreen.PaymentScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle title="Checkout" onBackPress={handleGoBack} />

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Delivery</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Address details</Text>

        <View style={styles.infoBox}>
          <Text style={styles.username}>{user?.username}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>
            Km 5 refinery road oppsite re public road, effurun, delta state
          </Text>
          <View style={styles.divider} />
          <Text style={styles.phoneNumber}>+234 9011039271</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Delivery method</Text>
        <View style={styles.infoBox}>
          <OptionSelect
            options={options}
            selectedOption={deliveryMethod}
            onChangeOption={handleChangeOption}
          />
        </View>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalValue}>{total.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <RoundButton
          text="Proceed to payment"
          onPress={handlePayment}
          colorType={ColorType.Orange}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  titleWrapper: {
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
  },
  infoContainer: {
    marginTop: 42,
    paddingHorizontal: 50,
  },
  infoTitle: {
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  username: {
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    marginBottom: 8,
    marginTop: 20,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.3))',
  },
  text: {
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    marginVertical: 8,
  },
  phoneNumber: {
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 8,
    marginBottom: 20,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 50,
    paddingEnd: 65,
    // marginTop: 70,
    flex: 1,
  },
  totalText: {
    textAlign: 'left',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 17,
    lineHeight: 20,
  },
  totalValue: {
    textAlign: 'right',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 22,
    lineHeight: 25,
  },
  buttonWrapper: {
    paddingHorizontal: 50,
  },
});
