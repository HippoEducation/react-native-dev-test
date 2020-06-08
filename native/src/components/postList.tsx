import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {Posts, Post} from '../types';
import PostItem from './postItem';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Posts | null>();

  const getPosts = async () => {
    try {
      let response = await fetch('http://localhost:4000/posts');
      let json = await response.json();
      setPosts(json);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={posts}
        renderItem={({ item }: { item: Post }) => (
          <PostItem
            title={item.title}
            body={item.body}
            author={item.author}
            publishedDate={item.publishedAt}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default PostList;
