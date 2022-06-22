import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { PaymentOptions } from './PaymentOptions';
import { OptionSelect } from '../../components/OptionSelect/OptionSelect';
import cardIcon from '../../../assets/images/creditCard.png';
import bankIcon from '../../../assets/images/bank.png';
import paypalIcon from '../../../assets/images/paypal.png';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { totalInCart } from '../../../domain/stores/reducers/foodCartReducer';
import { NoteModal } from './NoteModal/NoteModal';

const deliveryOptions = [
  { id: 1, name: 'Door delivery' },
  { id: 2, name: 'Pick up' },
];

const paymentOptions = [
  { id: 1, name: 'Card', image: cardIcon, bgColor: '#F47B0A' },
  { id: 2, name: 'Bank account', image: bankIcon, bgColor: '#EB4796' },
  { id: 3, name: 'Paypal', image: paypalIcon, bgColor: '#0038FF' },
];

export const PaymentScreen: React.FC = () => {
  const navigation = useNavigation();
  const [delivery, setDelivery] = useState(deliveryOptions[0]);
  const [payment, setPayment] = useState(paymentOptions[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const total = useSelector(totalInCart);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeDelivery = (optionValue: { id: number; name: string }) => {
    setDelivery(optionValue);
  };

  const handleChangePayment = (option: { id: number; name: string }) => {
    setPayment(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={handleGoBack} title="Checkout" />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Payment</Text>
      </View>

      <View style={[styles.infoContainer, { marginTop: 20 }]}>
        <Text style={styles.infoTitle}>Payment method</Text>

        <View style={styles.infoBox}>
          <PaymentOptions
            options={paymentOptions}
            selectedOption={payment}
            onChangeOption={handleChangePayment}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Delivery method</Text>
        <View style={styles.infoBox}>
          <OptionSelect
            options={deliveryOptions}
            selectedOption={delivery}
            onChangeOption={handleChangeDelivery}
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
          onPress={() => setModalVisible(true)}
          colorType={ColorType.Orange}
        />
      </View>

      <NoteModal
        modalVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onProceed={() => setModalVisible(false)}
      />
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
    marginTop: 20,
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
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.3))',
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 50,
    paddingEnd: 65,
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
