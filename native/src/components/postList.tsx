import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Post } from '../../../api/src/data/posts'
import PostItem from './postItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../HomeStackParamList';

type Props = {
    navigation?: StackNavigationProp<HomeStackParamList, 'Home'>
}

const PostList: React.FC<Props> = ( {navigation} ) => {
  const [postList, setPostList] = useState<Post[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayingFilteredList, setDisplayingFilteredList] = useState<boolean>(
    false
  );

  const getPosts = async () => {
    setIsLoading(true);
    try {
      let response = await fetch('http://localhost:4000/posts');
      let json = await response.json();
      let sortedPosts = await sortPostsByPublishedAt(json);
      setPostList(sortedPosts);
      setIsLoading(false);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const sortPostsByPublishedAt = (postsToSort: Post[]): Post[] => {
    const sortedPosts = postsToSort.sort((a: Post, b: Post): number => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });
    return sortedPosts;
  };

  useEffect(() => {
    getPosts();
  }, []);

  const searchFilterFunction = (text: string) => {
    const filteredPosts = postList?.filter((singlePost: Post) => {
      return singlePost.author.name == text;
    });

    setPostList(filteredPosts);
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
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#a697db"
          size="large"
        />
      )}
      <FlatList
        style={{ width: '100%' }}
        data={postList}
        renderItem={({ item }: { item: Post }) => (
          <PostItem
            title={item.title}
            body={item.body}
            author={item.author}
            publishedAt={item.publishedAt}
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
