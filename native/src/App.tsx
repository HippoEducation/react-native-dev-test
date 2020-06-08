import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PostList from './components/postList';

export function App() {
  return (
    <View style={styles.container}>
      <PostList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
