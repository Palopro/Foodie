import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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

  const { data: orderHistoryList } = foodieApi.useOrderHistoryQuery(user?.id, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  const handleCartPress = () => {
    navigation.navigate(AppScreen.CartScreen);
  };

  const renderRow = ({ item }: ListRenderItemInfo<OrderHistory>) => (
    <HistoryRow orderHistory={item} />
  );

  const keyExtractor = (order: OrderHistory) => `order-${order.id}`;

  const renderSeparator = () => <View style={styles.divider} />;

  const renderHeader = () => <View style={styles.header} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" animated />
      <AppBar onMenuPress={navigation.goBack} onCartPress={handleCartPress} />

      <View style={styles.titleWrapper}>
        <StylingText style={styles.title} textType={TextType.Bold}>
          History
        </StylingText>
      </View>

      <FlatList
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        data={orderHistoryList}
        renderItem={renderRow}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={[
          styles.contentList,
          { flex: orderHistoryList.length === 0 ? 1 : undefined },
        ]}
      />
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
});
