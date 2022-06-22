import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface OptionValue {
  id: number;
  name: string;
  image: ImageSourcePropType;
  bgColor: string;
}
interface PaymentRowProps {
  paymentOption: OptionValue;
  isSelected: boolean;
  onPress: (paymentOption: OptionValue) => void;
}

export const PaymentRow: React.FC<PaymentRowProps> = ({
  paymentOption,
  isSelected,
  onPress,
}) => {
  const handlePress = () => onPress(paymentOption);

  const selectCircleColor = isSelected ? '#FA4A0C' : '#9F9F9F';
  const selectInnerCircleColor = isSelected ? '#FA4A0C' : 'transparent';

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
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

      <View style={[styles.icon, { backgroundColor: paymentOption.bgColor }]}>
        <Image source={paymentOption.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{paymentOption.name}</Text>
    </TouchableOpacity>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    marginStart: 10,
    textAlign: 'left',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    color: 'rgba(0, 0, 0, 1)',
  },
});
