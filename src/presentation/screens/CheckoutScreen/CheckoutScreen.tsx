import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { OptionSelect } from '../../components/OptionSelect/OptionSelect';
import { totalInCart } from '../../../domain/stores/reducers/foodCartReducer';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { AppScreen } from '../../../navigation/AppScreen';
import { StylingText, TextType } from '../../components/StylingText';
import { RootStackParams } from '../../../navigation/RootNavigation';
import { useAppSelector } from '../../../hooks';
import { DeliveryType } from '../../../domain/model/DeliveryType';

export const CheckoutScreen: React.FC<
  NativeStackScreenProps<RootStackParams>
> = ({ navigation }) => {
  const deliveryMethods = useAppSelector(
    state => state.cartReducer.deliveryMethods,
  );

  const [deliveryMethod, setDeliveryMethod] = useState(deliveryMethods[0]);

  const total = useSelector(totalInCart);

  const { data: user } = foodieApi.useAboutMeQuery();

  const handleChangeOption = (optionValue: DeliveryType) => {
    setDeliveryMethod(optionValue);
  };

  const handlePayment = () => {
    navigation.navigate(AppScreen.PaymentScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle title="Checkout" onBackPress={navigation.goBack} />

      <View style={styles.titleWrapper}>
        <StylingText textType={TextType.Bold} style={styles.title}>
          Delivery
        </StylingText>
      </View>

      <View style={styles.infoContainer}>
        <StylingText textType={TextType.Bold} style={styles.infoTitle}>
          Address details
        </StylingText>

        <View style={styles.infoBox}>
          <StylingText textType={TextType.Bold} style={styles.username}>
            {user?.username}
          </StylingText>
          <View style={styles.divider} />
          <StylingText textType={TextType.Regular} style={styles.text}>
            Km 5 refinery road oppsite re public road, effurun, delta state
          </StylingText>
          <View style={styles.divider} />
          <StylingText textType={TextType.Regular} style={styles.phoneNumber}>
            +234 9011039271
          </StylingText>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <StylingText textType={TextType.Bold} style={styles.infoTitle}>
          Delivery method
        </StylingText>
        <View style={styles.infoBox}>
          <OptionSelect
            options={deliveryMethods}
            selectedOption={deliveryMethod}
            onChangeOption={handleChangeOption}
          />
        </View>
      </View>

      <View style={styles.totalRow}>
        <StylingText textType={TextType.Regular} style={styles.totalText}>
          Total
        </StylingText>
        <StylingText textType={TextType.Bold} style={styles.totalValue}>
          {total.toFixed(2)}
        </StylingText>
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
  },
  infoContainer: {
    marginTop: 42,
    paddingHorizontal: 50,
  },
  infoTitle: {
    fontSize: 17,
    lineHeight: 20,
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
    marginVertical: 8,
  },
  phoneNumber: {
    fontSize: 15,
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 20,
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
    fontSize: 17,
    lineHeight: 20,
  },
  totalValue: {
    textAlign: 'right',
    fontSize: 22,
    lineHeight: 25,
  },
  buttonWrapper: {
    paddingHorizontal: 50,
  },
});
