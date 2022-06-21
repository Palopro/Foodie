import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Divider } from '../../components/OptionSelect/Divider';

interface OptionValue {
  id: number;
  name: string;
  image: ImageSourcePropType;
  bgColor: string;
}

interface PaymentOptionsProps {
  options: Array<OptionValue>;
  selectedOption: OptionValue;
  onChangeOption: (optionValue: { id: number; name: string }) => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  options,
  selectedOption,
  onChangeOption,
}) => {
  const keyExtractor = (option: OptionValue) => `Payment-${option.id}`;

  const renderItem = ({ item }: ListRenderItemInfo<OptionValue>) => {
    const selectCircleColor =
      item.id === selectedOption.id ? '#FA4A0C' : '#9F9F9F';
    const selectInnerCircleColor =
      item.id === selectedOption.id ? '#FA4A0C' : 'transparent';

    const handlePress = () => onChangeOption({ id: item.id, name: item.name });

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingVertical: 15,
        }}>
        <View style={[styles.circle, { borderColor: selectCircleColor }]}>
          <View
            style={[
              styles.innerCircle,
              {
                borderColor: selectInnerCircleColor,
                backgroundColor: selectInnerCircleColor,
              },
            ]}
          />
        </View>

        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: item.bgColor,
          }}>
          <Image
            source={item.image}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </View>
        <Text style={{ marginStart: 10 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        scrollEnabled={false}
        bounces={false}
        data={options}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

const DIVIDER = 2;
const SIZE = 15;
const INNER_SIZE = SIZE / DIVIDER;

const styles = StyleSheet.create({
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 15,
  },
  innerCircle: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: 50,
    borderWidth: 1,
  },
});
