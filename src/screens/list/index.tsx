import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';

import ListData from '../../utils/fake-data';
import { ListItem } from './components/item';

//
//

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: string;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, backgroundColor: colors.itemList }}>
        {ListData.map(item => <ListItem key={item.id} item={item} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;
