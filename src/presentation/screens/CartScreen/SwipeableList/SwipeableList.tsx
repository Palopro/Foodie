import React from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  View,
} from 'react-native';

import { SwipeableRow } from './SwipeableRow';
import { CartFood } from '../../../../domain/model/CartFood';
import { CartEmpty } from '../CartEmpty';

interface SwipeableListProps<ItemT = any> extends FlatListProps<ItemT> {
  onDecrementQty: (item: ItemT) => void;
  onIncrementQty: (item: ItemT) => void;
  onDelete: (item: ItemT) => void;
  onFavorite: (item: ItemT) => void;
}

export const SwipeableList: React.FC<SwipeableListProps> = ({
  data,
  onDecrementQty,
  onIncrementQty,
  onDelete,
  onFavorite,
  ListEmptyComponent,
  ...rest
}) => {
  // const renderEmptyComponent = () => {
  //   if (!ListEmptyComponent) {
  //     return null;
  //   }
  //   return <ListEmptyComponent />;
  // };

  // const renderList = () =>
  //   data.map(item => (
  //     <SwipeableRow
  //       key={`row-${item.id}`}
  //       onDecrementQty={onDecrementQty}
  //       onIncrementQty={onIncrementQty}
  //       onDelete={onDelete}
  //       onFavorite={onFavorite}
  //       cartFood={item}
  //     />
  //   ));

  const renderItem = ({ item }: ListRenderItemInfo<CartFood>) => (
    <SwipeableRow
      key={`row-${item.id}`}
      onDecrementQty={onDecrementQty}
      onIncrementQty={onIncrementQty}
      onDelete={onDelete}
      onFavorite={onFavorite}
      cartFood={item}
    />
  );

  const keyExtractor = (food: CartFood) => `cart-item-${food.id}`;

  return (
    // <ScrollView {...rest}>
    //   {data.length !== 0 ? renderList() : renderEmptyComponent()}
    // </ScrollView>
    <FlatList
      {...rest}
      scrollEventThrottle={16}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={CartEmpty}
    />
  );
};
