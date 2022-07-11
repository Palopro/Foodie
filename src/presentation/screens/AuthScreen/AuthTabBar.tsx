import React from 'react';
import { NavigationState, TabBar } from 'react-native-tab-view';
import { StyleSheet } from 'react-native';
import reactotron from 'reactotron-react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

interface Props extends MaterialTopTabBarProps {
  navigationState: NavigationState<{ key: string; title: string }>;
}

export const AuthTabBar: React.FC<Props> = ({ state, ...props }) => {
  reactotron.log({ state });

  return (
    <TabBar
      {...props}
      // getLabelText={state.routeNames[0]}
      style={styles.tabBar}
      labelStyle={styles.label}
      indicatorStyle={styles.indicator}
    />
  );
};

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
