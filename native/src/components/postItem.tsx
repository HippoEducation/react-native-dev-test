import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

type Props = {
  title: string;
  body: string;
  author: { id: string; name: string };
  publishedDate: Date;
};

const PostItem: React.FC<Props> = ({ title, body, author, publishedDate }) => {
  const getSummary = (body: string): string => {
    let summary = body.substring(2, body.indexOf('##'));
    return summary.trim();
  };

  return (
    <TouchableOpacity onPress={() => console.log('wtf')} style={styles.post}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postAuthor}>{`By: ${author.name}`}</Text>
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
