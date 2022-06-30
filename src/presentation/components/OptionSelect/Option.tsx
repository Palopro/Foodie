import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DeliveryNote } from '../../../domain/model/DeliveryNote';

interface OptionProps {
  option: DeliveryNote;
  isSelected: boolean;
  onPress: (option: DeliveryNote) => void;
}

export const Option: React.FC<OptionProps> = ({
  option,
  isSelected,
  onPress,
}) => {
  const selectCircleColor = isSelected ? '#FA4A0C' : '#9F9F9F';
  const selectInnerCircleColor = isSelected ? '#FA4A0C' : 'transparent';

  const handlePress = () => onPress(option);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
      <Text style={styles.text}>{option.name}</Text>
    </TouchableOpacity>
  );
};

const DIVIDER = 2;
const SIZE = 15;
const INNER_SIZE = SIZE / DIVIDER;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: 50,
    borderWidth: 1,
  },
  text: {
    marginStart: 16,
    textAlign: 'left',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    color: 'rgba(0, 0, 0, 1)',
  },
});
