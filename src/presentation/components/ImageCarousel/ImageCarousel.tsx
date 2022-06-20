import React, { useState } from 'react';
import {
  ListRenderItemInfo,
  StyleSheet,
  View,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { CarouselItem } from './CarouselItem';

interface ImageCarouselProps {
  images: Array<string>;
}

const DEFAULT_INDEX = 0;

const bgColor = (index: number, activeImg: number) =>
  index === activeImg ? 'rgb(250, 74, 12)' : 'rgb(196, 196, 196)';

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeImg, setActiveImg] = useState(DEFAULT_INDEX);

  const keyExtractor = (img: string, index: number) => `img-${index}`;

  const renderImage = ({ item }: ListRenderItemInfo<string>) => (
    <CarouselItem imageSource={item} />
  );

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (slideIndex !== activeImg) {
      setActiveImg(slideIndex);
    }
  };

  return (
    <>
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        snapToAlignment="center"
        data={images}
        keyExtractor={keyExtractor}
        renderItem={renderImage}
        scrollEventThrottle={16}
        decelerationRate="fast"
        onScroll={handleScroll}
      />

      <View style={styles.dotView}>
        {images.map((img, index: number) => {
          let backgroundColor = bgColor(index, activeImg);

          return (
            <Animated.View
              key={index}
              style={[styles.dot, { backgroundColor }]}
            />
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#C4C4C4',
    height: 8,
    width: 8,
    marginHorizontal: 6,
    marginVertical: 4,
    borderRadius: 100,
  },
});
