import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { Post } from '../types';

type Props = {
  title: string;
  body: string;
  author: { id: string; name: string };
  publishedDate: Date;
  handleOnPressAuthor: (text: string) => void;
  handleOnPressPost: (body: string, title: string) => void;
};

const PostItem: React.FC<Props> = ({
  title,
  body,
  author,
  publishedDate,
  handleOnPressAuthor,
  handleOnPressPost
}) => {
  const getSummary = (body: string): string => {
    let summary = body.substring(2, body.indexOf('##'));
    return summary.trim();
  };

  return (
    <TouchableOpacity
      style={styles.post}
      onPress={() => handleOnPressPost(body, title)}
    >
      <Text style={styles.postTitle}>{title}</Text>
      <Text
        onPress={() => handleOnPressAuthor(author.name)}
        style={styles.postAuthor}
      >{`By: ${author.name}`}</Text>
      <Text style={styles.postSummary}>{`Summary: ${getSummary(body)}`}</Text>
      <Text style={styles.postDate}>{`Published: ${moment(publishedDate).format(
        'DD MMM YYYY'
      )}`}</Text>
    </TouchableOpacity>
  );
};

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

export default PostItem;
