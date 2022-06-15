import React from 'react';
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import { StyleSheet } from 'react-native';

interface Props extends SceneRendererProps {
  navigationState: NavigationState<{ key: string; title: string }>;
}

export const AuthTabBar: React.FC<Props> = props => (
  <TabBar
    {...props}
    style={styles.tabBar}
    labelStyle={styles.label}
    indicatorStyle={styles.indicator}
  />
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    textTransform: 'capitalize',
  },
  indicator: {
    backgroundColor: '#FA4A0C',
    height: 3,
    borderRadius: 12,
  },
});
