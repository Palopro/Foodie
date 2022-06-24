import React from 'react';
import { StyleSheet, Dimensions, View, ListRenderItemInfo } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import { CarouselItem } from './CarouselItem';
import { Dot } from './Dot';

interface ImageCarouselProps {
  images: Array<string>;
}

const DEFAULT_INDEX = 0;

const { width } = Dimensions.get('window');

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const scroll = React.useRef<Animated.FlatList<string>>(null);

  const x = useSharedValue(DEFAULT_INDEX);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => (x.value = contentOffset.x),
  });

  const currentIndex = useDerivedValue(() => x.value / width);

  const renderImage = ({ item }: ListRenderItemInfo<string>) => (
    <CarouselItem key={item} imageSource={item} />
  );
  const renderDot = (img: string, index: number) => (
    <Dot key={index} index={index} currentIndexAnimated={currentIndex} />
  );

  return (
    <>
      <Animated.FlatList
        data={images}
        renderItem={renderImage}
        ref={scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={width}
        onScroll={onScroll}
      />

      <View style={styles.dotView}>{images.map(renderDot)}</View>
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
