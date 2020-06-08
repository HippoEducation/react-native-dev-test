import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostList from './components/postList';
import PostDetails from './components/postDetails';
import { HomeStackParamList } from './HomeStackParamList';

const Stack = createStackNavigator<HomeStackParamList>();

const IosTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: '#8782de',
  },
};

const AndroidTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    secondary: '#8782de'
  },
};

export function App() {
  return (
    <NavigationContainer
      theme={Platform.OS === 'ios' ? IosTheme : AndroidTheme}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#282a36',
          },
          headerTintColor: '#8782de',
        }}
      >
        <Stack.Screen
          name="Home"
          component={PostList}
        />
        <Stack.Screen
          name="Details"
          component={PostDetails}
          options={{ title: 'Post Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
