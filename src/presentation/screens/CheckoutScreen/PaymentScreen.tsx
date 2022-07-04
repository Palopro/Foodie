import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { PaymentOptions } from './PaymentOptions';
import { OptionSelect } from '../../components/OptionSelect/OptionSelect';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { totalInCart } from '../../../domain/stores/reducers/foodCartReducer';
import { NoteModal } from './NoteModal/NoteModal';
import { useAppSelector } from '../../../hooks';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Order } from '../../../domain/model/Order';
import { RootStackParams } from '../../../navigation/RootNavigation';

interface OptionValue {
  id: number;
  name: string;
  value: string;
}

export const PaymentScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const paymentOptions = useAppSelector(
    ({ authReducer }) => authReducer.paymentOptions,
  );
  const deliveryNotes = useAppSelector(
    state => state.cartReducer.deliveryNotes,
  );
  const [delivery, setDelivery] = useState(deliveryNotes[0]);
  const [payment, setPayment] = useState(paymentOptions[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const total = useSelector(totalInCart);
  const cart = useAppSelector(state => state.cartReducer.cart);
  const user = useAppSelector(state => state.authReducer.user);

  const [createOrder] = foodieApi.useCreateOrderMutation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeDelivery = (optionValue: OptionValue) => {
    setDelivery(optionValue);
  };

  const handleChangePayment = (option: OptionValue) => {
    setPayment(option);
  };

  const handleCancel = () => setModalVisible(false);

  const handleProceed = () => {
    setModalVisible(false);

    const order = new Order(
      'Test order Address',
      '+380999999999',
      delivery.value,
      payment.value,
      user!.id,
      cart,
    );

    createOrder({ order });
  };

  const handleToPayment = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={handleGoBack} title="Checkout" />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Payment</Text>
      </View>

      <View style={styles.infoContainer}>
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
            options={deliveryNotes}
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
          onPress={handleToPayment}
          colorType={ColorType.Orange}
        />
      </View>

      <NoteModal
        modalVisible={modalVisible}
        onCancel={handleCancel}
        onProceed={handleProceed}
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
