import React from 'react';
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import { StyleSheet } from 'react-native';

type INavState = NavigationState<{
  key: string;
  title: string;
}>;

interface Props extends SceneRendererProps {
  navigationState: INavState;
}

export const AuthTabBar: React.FC<Props> = props => (
  <TabBar
    {...props}
    style={styles.tabBar}
    labelStyle={styles.label}
    indicatorStyle={{
      backgroundColor: '#FA4A0C',
      height: 3,
      borderRadius: 12,
    }}
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
    textTransform: 'capitalize',
  },
});
