import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Divider } from '../../components/OptionSelect/Divider';
import { PaymentRow } from './PaymentRow';
import { PaymentOption } from '../../../domain/model/PaymentOption';

interface PaymentOptionsProps {
  options: Array<PaymentOption>;
  selectedOption: PaymentOption;
  onChangeOption: (optionValue: PaymentOption) => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  options,
  selectedOption,
  onChangeOption,
}) => {
  const keyExtractor = (option: PaymentOption) => `Payment-${option.id}`;

  const handlePressOption = (option: PaymentOption) => onChangeOption(option);

  const renderItem = ({ item }: ListRenderItemInfo<PaymentOption>) => (
    <PaymentRow
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
