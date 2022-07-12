import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';

import { AppBar } from '../../components/AppBar/AppBar';
import { AppScreen } from '../../../navigation/AppScreen';
import { MainAppTabParams } from '../../../navigation/MainNavigation';
import { StylingText, TextType } from '../../components/StylingText';
import { HistoryRow } from './HistoryRow';
import { useAppSelector } from '../../../hooks';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { OrderHistory } from '../../../domain/model/OrderHistory';
import { EmptyList } from './EmptyList';

export const OrderHistoryScreen: React.FC<
NativeStackScreenProps<MainAppTabParams>
> = ({ navigation }) => {
  const user = useAppSelector(state => state.authReducer.user);

  const {
    data: orderHistoryList = [],
    isLoading,
    isFetching,
    refetch,
  } = foodieApi.useOrderHistoryQuery(user?.id, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleCartPress = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const handlePressOrder = (orderHistory: OrderHistory) => {
    navigation.navigate(AppScreen.OrderHistoryDetailsScreen, { order: orderHistory });
  };

  const renderRow = ({ item }: ListRenderItemInfo<OrderHistory>) => (
    <HistoryRow orderHistory={item} onPress={handlePressOrder} />
  );

  const keyExtractor = (order: OrderHistory) => `order-${order.id}`;

  const renderSeparator = () => <View style={styles.divider} />;

  const renderHeader = () => <View style={styles.header} />;

  const renderRefreshControl = () => (
    <RefreshControl
      refreshing={isFetching}
      onRefresh={refetch}
      tintColor="#FA4A0C"
      colors={['#FA4A0C']}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <AppBar onMenuPress={handleMenu} onCartPress={handleCartPress} />

      <View style={styles.titleWrapper}>
        <StylingText style={styles.title} textType={TextType.Bold}>
          History
        </StylingText>
      </View>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator animating color="#FA4A0C" size="large" />
        </View>
      ) : (
        <FlatList
          refreshControl={renderRefreshControl()}
          scrollEventThrottle={16}
          keyExtractor={keyExtractor}
          data={orderHistoryList}
          renderItem={renderRow}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={EmptyList}
          contentContainerStyle={[
            styles.contentList,
            { flex: orderHistoryList.length === 0 ? 1 : undefined },
          ]}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  titleWrapper: {
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 34,
    letterSpacing: -0.03,
    lineHeight: 40,
  },
  header: {
    height: 40,
  },
  divider: {
    height: 20,
  },
  contentList: {
    paddingHorizontal: 50,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
