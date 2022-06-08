import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { foodieApi } from '../../data/dataSource/api/foodieApi';

export const SearchScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data: foods, isLoading } = foodieApi.useSearchFoodsQuery(searchValue);

  return (
    <SafeAreaView>
      <View>
        <Text>dfmjfnd</Text>
      </View>
    </SafeAreaView>
  );
};
