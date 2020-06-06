import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

type Props = {
  count: number;
};

const PostList: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    try {
      let response = await fetch('http://192.168.0.105:4000/posts');
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
    console.log(posts);
  }, [posts]);

  return <Text>Count {props.count}</Text>;
};

export default PostList;
