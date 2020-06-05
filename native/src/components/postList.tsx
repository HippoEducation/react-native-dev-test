import React, { useState } from 'react';
import { Text } from 'react-native';

type Props = {
  count: number;
};

const PostList: React.FC<Props> = (props) => {
  return <Text>Count {props.count}</Text>;
};

export default PostList;
