import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { UserFormScreen } from '../screens/UserFormScreen';
import { UserListScreen } from '../screens/UserListScreen';

export type AppStackParamsList = {
  List: undefined,
  Create: undefined,
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<AppStackParamsList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='List'>
      <Stack.Screen name="List" component={UserListScreen} />
      <Stack.Screen name="Create" component={UserFormScreen} />
    </Stack.Navigator>
  );
}