import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { HomeStackParamList } from '../HomeStackParamList';
import { RouteProp } from '@react-navigation/native';

type Props = {
    route: RouteProp<HomeStackParamList, 'Details'>
}

const PostDetails: React.FC<Props> = ({route}) => {
    return (
      <View>
        <Text testID="title">{route.params.title}</Text>
        <Text testID="body">{route.params.body}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  postAuthor: {
    bottom: 0,
    fontSize: 15,
  },
  postDate: {},
  postSummary: {},
  postTitle: {
    fontSize: 18,
    flex: 1,
  },
});

export default PostDetails;