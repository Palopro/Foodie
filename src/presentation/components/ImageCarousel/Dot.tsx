import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

interface DotProps {
  currentIndexAnimated: Animated.SharedValue<number>;
  index: number;
}

const ACTIVE_COLOR = 'rgba(250, 74, 12, 1)';
const DEFAULT_COLOR = 'rgba(196, 196, 196, 1)';

export const Dot: React.FC<DotProps> = ({ index, currentIndexAnimated }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      currentIndexAnimated.value,
      [index - 1, index, index + 1],
      [DEFAULT_COLOR, ACTIVE_COLOR, DEFAULT_COLOR],
    ),
  }));

  return <Animated.View key={index} style={[styles.dot, animatedStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#C4C4C4',
    height: 8,
    width: 8,
    marginHorizontal: 6,
    marginVertical: 4,
    borderRadius: 100,
  },
});
