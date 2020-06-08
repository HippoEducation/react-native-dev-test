import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostList from './components/postList';
import PostDetails from './components/postDetails';
import { HomeStackParamList } from './HomeStackParamList';

const Stack = createStackNavigator<HomeStackParamList>();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PostList} options={{header: () => null}}/>
        <Stack.Screen name="Details" component={PostDetails} options={{title: 'Post Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
