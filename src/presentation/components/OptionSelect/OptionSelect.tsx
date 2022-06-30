import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Divider } from './Divider';
import { Option } from './Option';
import { DeliveryNote } from '../../../domain/model/DeliveryNote';

interface OptionSelectProps {
  options: Array<DeliveryNote>;
  selectedOption: DeliveryNote;
  onChangeOption: (optionValue: DeliveryNote) => void;
}

export const OptionSelect: React.FC<OptionSelectProps> = ({
  options,
  selectedOption,
  onChangeOption,
}) => {
  const handleChangeOption = (optionValue: DeliveryNote) =>
    onChangeOption(optionValue);

  const keyExtractor = (option: DeliveryNote) => `Option-${option.id}`;

  const renderItem = ({ item }: ListRenderItemInfo<DeliveryNote>) => (
    <Option
      key={`opt-${item.id}`}
      option={item}
      isSelected={item.id === selectedOption.id}
      onPress={handleChangeOption}
    />
  );

  return (
    <FlatList
      data={options}
      scrollEnabled={false}
      bounces={false}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Divider}
    />
  );
};
