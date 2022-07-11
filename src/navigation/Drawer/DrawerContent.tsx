import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { AppScreen } from '../AppScreen';
import { DrawerItem } from './DrawerItem';
import { useAppDispatch } from '../../hooks';
import { authUserReducer } from '../../domain/stores/reducers/authUserReducer';
import { storage, StorageKeys } from '../../data/dataSource/storage';
import { SignOutButton } from './SignOutButton';
import { foodCartReducer } from '../../domain/stores/reducers/foodCartReducer';
import { foodReducer } from '../../domain/stores/reducers/foodReducer';

interface DrawerRow {
  icon: string;
  label: string;
  screen: AppScreen;
}

const items: Array<DrawerRow> = [
  {
    icon: 'person-outline',
    label: 'Profile',
    screen: AppScreen.ProfileScreen,
  },
  {
    icon: 'shopping-cart',
    label: 'Orders',
    screen: AppScreen.FavoritesScreen,
  },
  {
    icon: 'local-offer',
    label: 'Offers and promo',
    screen: AppScreen.FavoritesScreen,
  },
  {
    icon: 'policy',
    label: 'Privacy policy',
    screen: AppScreen.FavoritesScreen,
  },
  {
    icon: 'security',
    label: 'Security',
    screen: AppScreen.FavoritesScreen,
  },
];

export const DrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();

  const renderItem = ({ item }: ListRenderItemInfo<DrawerRow>) => (
    <DrawerItem {...item} />
  );

  const renderDivider = () => <View style={styles.divider} />;

  const handleLogout = async () => {
    await storage.removeFromStorage(StorageKeys.JWT);
    dispatch(authUserReducer.actions.logout());
    dispatch(foodCartReducer.actions.clearCart());
    dispatch(foodReducer.actions.clear());

    navigation.reset({
      index: 0,
      routes: [
        {
          name: AppScreen.AuthNavigation,
        },
      ],
    });
  };

  const keyExtractor = (item: DrawerRow, index: number) =>
    `row-${item.screen.toString()}-${index}`;

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <FlatList
        keyExtractor={keyExtractor}
        bounces={false}
        data={items}
        renderItem={renderItem}
        ItemSeparatorComponent={renderDivider}
      />

      <View style={styles.footer}>
        <SignOutButton onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA4A0C',
  },
  divider: {
    backgroundColor: '#FFFFFF',
    height: 1,
    marginStart: 74,
    marginEnd: 48,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    marginHorizontal: 40,
  },
});
