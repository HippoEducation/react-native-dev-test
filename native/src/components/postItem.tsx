import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

type Props = {
  title: string;
  body: string;
  author: { id: string; name: string };
  publishedAt: Date;
  handleOnPressAuthor: (text: string) => void;
  handleOnPressPost: (body: string, title: string) => void;
};

const PostItem: React.FC<Props> = ({
  title,
  body,
  author,
  publishedAt,
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
      <Text style={styles.postDate}>{`Published: ${moment(publishedAt).format(
        'DD MMM YYYY'
      )}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    marginVertical: 10,
    marginBottom: 10,
    marginRight: 7,
    marginLeft: 7,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  postAuthor: {
    bottom: 0,
    fontSize: 15,
    color: '#55c0fd',
  },
  postDate: {},
  postSummary: {

  },
  postTitle: {
    fontSize: 18,
    flex: 1,
    color: '#a697db',
  },
});

export default PostItem;
