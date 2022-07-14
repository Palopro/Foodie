import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Divider } from '../../components/OptionSelect/Divider';
import { PaymentRow } from './PaymentRow';
import { PaymentOption } from '../../../domain/model/PaymentOption';
import cardIcon from '../../../assets/images/creditCard.png';
import bankIcon from '../../../assets/images/bank.png';
import paypalIcon from '../../../assets/images/paypal.png';

interface PaymentOptionsProps {
  options: Array<PaymentOption>;
  selectedOption: PaymentOption;
  onChangeOption: (optionValue: PaymentOption) => void;
}

const paymentIcons = {
  1: { image: cardIcon, bgColor: '#F47B0A' },
  2: { image: bankIcon, bgColor: '#EB4796' },
  3: { image: paypalIcon, bgColor: '#0038FF' },
};

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ options, selectedOption, onChangeOption }) => {
  const keyExtractor = (option: PaymentOption) => `Payment-${option.id}`;

  const handlePressOption = (option: PaymentOption) => onChangeOption(option);

  const renderItem = ({ item }: ListRenderItemInfo<PaymentOption>) => (
    <PaymentRow
      paymentIcon={paymentIcons[item.id]}
      paymentOption={item}
      isSelected={item.id === selectedOption.id}
      onPress={handlePressOption}
    />
  );

  return (
    <FlatList
      scrollEnabled={false}
      bounces={false}
      data={options}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Divider}
    />
  );
};
