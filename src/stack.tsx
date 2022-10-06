import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen, { IListItem } from './screens/list';
import { Item } from './item';

import { ThemeFont, Typography } from './components/typography';

//
//

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#eee',
        },
      }}>
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ title: 'Items', headerTitleAlign: 'center' }}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={Item}
        options={{
          title: 'Item'
        }}

      />
    </RootStack.Navigator>
  );
};

export default Stack;
