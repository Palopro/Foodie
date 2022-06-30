import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import { SwipeableRow } from './SwipeableRow';

interface SwipeableListProps<ItemT = any> extends ScrollViewProps {
  data: ReadonlyArray<ItemT>;
  onDecrementQty: (item: ItemT) => void;
  onIncrementQty: (item: ItemT) => void;
  onDelete: (item: ItemT) => void;
  onFavorite: (item: ItemT) => void;
  ListEmptyComponent?:
  | React.ComponentType<any>
  | React.ReactElement
  | null
  | undefined;
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
  const renderEmptyComponent = () => {
    if (data.length === 0) {
      if (ListEmptyComponent) {
        return <ListEmptyComponent />;
      }
      return null;
    }
  };

  const renderList = () => {
    if(data.length === 0) {
      return null;
    }

    return data.map(item => (
      <SwipeableRow
        key={`row-${item.id}`}
        onDecrementQty={onDecrementQty}
        onIncrementQty={onIncrementQty}
        onDelete={onDelete}
        onFavorite={onFavorite}
        cartFood={item}
      />
    ))
  }

  return (
    <ScrollView {...rest}>
      {renderEmptyComponent()}
      {renderList()}

    </ScrollView>
  );
};
