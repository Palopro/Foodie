import React, { memo } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

interface CarouselItemProps {
  imageSource: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = memo(
  ({ imageSource }) => (
    <Image source={{ uri: imageSource }} style={styles.image} />
  ),
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width,
    height: 270,
    resizeMode: 'contain',
  },
});
