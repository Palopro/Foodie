import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  ImageSourcePropType,
} from 'react-native';

import { Divider } from '../../components/OptionSelect/Divider';
import { PaymentRow } from './PaymentRow';

interface OptionValue {
  id: number;
  name: string;
  value: string;
  image: ImageSourcePropType;
  bgColor: string;
}

interface PaymentOptionsProps {
  options: Array<OptionValue>;
  selectedOption: OptionValue;
  onChangeOption: (optionValue: {
    id: number;
    name: string;
    value: string;
  }) => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  options,
  selectedOption,
  onChangeOption,
}) => {
  const keyExtractor = (option: OptionValue) => `Payment-${option.id}`;

  const handlePressOption = (option: OptionValue) => onChangeOption(option);

  const renderItem = ({ item }: ListRenderItemInfo<OptionValue>) => (
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
