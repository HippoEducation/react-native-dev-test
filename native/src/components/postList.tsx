import React, { useState, useEffect } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Posts, Post } from '../types';
import PostItem from './postItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../HomeStackParamList';

type Props = {
    navigation?: StackNavigationProp<HomeStackParamList, 'Home'>
}

const PostList: React.FC<Props> = ( {navigation} ) => {
  const [posts, setPosts] = useState<Posts | null>();
  const [displayingFilteredList, setDisplayingFilteredList] = useState<boolean>(
    false
  );

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

  const searchFilterFunction = (text: string) => {
    const filteredPosts = posts?.filter((post) => {
      return post.author.name == text;
    });

    setPosts(filteredPosts);
    setDisplayingFilteredList(true);
  };

  const handleShowAllPosts = () => {
    getPosts();
    setDisplayingFilteredList(false);
  };

  const ShowAllPosts = () => {
    return (
      <TouchableOpacity onPress={() => handleShowAllPosts()}>
        <Text style={styles.showAllPosts}>Show all Posts</Text>
      </TouchableOpacity>
    );
  };

  const handleOnPressPost = (bodyText: string, titleText:string) => {
    navigation.navigate('Details', { body: bodyText, title: titleText });
  };

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
            handleOnPressAuthor={searchFilterFunction}
            handleOnPressPost={handleOnPressPost}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {displayingFilteredList && <ShowAllPosts />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  showAllPosts: {
    fontSize: 60,
    top: 0,
  },
});

export default PostList;
