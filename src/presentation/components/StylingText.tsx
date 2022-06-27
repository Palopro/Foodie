import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export enum TextType {
  Regular = 'Regular',
  Bold = 'Bold',
}

interface StylingTextProps extends TextProps {
  textType: TextType;
}

export const StylingText: React.FC<StylingTextProps> = ({
  textType,
  children,
  style,
  ...props
}) => {
  const textStyle =
    textType === TextType.Regular ? styles.regularText : styles.boldText;

  return (
    <Text {...props} style={[styles.common, textStyle, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  common: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20,
  },
  boldText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
  },
  regularText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
  },
});
