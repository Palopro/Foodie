import React, { ReactNode } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Dimensions, StyleSheet, View} from 'react-native';

import { snapPoint } from '../../../utils/hepler/snapPoint';
import { QuickAction } from '../Action/QuickAction';
import { CartFood } from '../../../../domain/model/CartFood';

interface GestureRowProps {
  cartFood: CartFood;
  children: ReactNode;
  onDelete: (cartFood: CartFood) => void;
  onFavorite: (cartFood: CartFood) => void;
}

const snapPoints = [0, -130];
const {width} = Dimensions.get('window');

export const GestureRow: React.FC<GestureRowProps> = ({
  children,
  cartFood,
  onFavorite,
  onDelete,
}) => {
  const translateX = useSharedValue(0);

  const handleGestureHandler = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx: { x: number }) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx: { x: number }) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(dest, {
        overshootClamping: true,
      });
    },
  });

  const handleDelete = () => {
    onDelete(cartFood);
  };

  const handleFavorite = () => {
    onFavorite(cartFood);
  };

  const style = useAnimatedStyle(() => ({
    marginHorizontal: 50,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
        }}>
        <View style={styles.actionContainer}>
          <QuickAction iconName="heart-outline" onPress={handleFavorite} />
          <View style={styles.divider} />
          <QuickAction iconName="delete-outline" onPress={handleDelete} />
        </View>
      </View>
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        onGestureEvent={handleGestureHandler}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    height: 102,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  divider: {
    width: 15,
  },
});
