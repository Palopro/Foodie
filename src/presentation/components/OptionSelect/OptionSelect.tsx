import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';

import { Divider } from './Divider';
import { Option } from './Option';

interface OptionValue {
  id: number;
  name: string;
}

interface OptionSelectProps {
  options: Array<OptionValue>;
  selectedOption: OptionValue;
  onChangeOption: (optionValue: OptionValue) => void;
}

export const OptionSelect: React.FC<OptionSelectProps> = ({
  options,
  selectedOption,
  onChangeOption,
}) => {
  const handleChangeOption = (optionValue: OptionValue) =>
    onChangeOption(optionValue);

  const keyExtractor = (option: OptionValue) => `Option-${option.id}`;

  const renderItem = ({ item }: ListRenderItemInfo<OptionValue>) => (
    <Option
      option={item}
      isSelected={item.id === selectedOption.id}
      onPress={handleChangeOption}
    />
  );

  return (
    <View>
      <FlatList
        data={options}
        scrollEnabled={false}
        bounces={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};
