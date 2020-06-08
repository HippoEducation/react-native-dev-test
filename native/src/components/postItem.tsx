import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import moment from 'moment';
import { useTheme } from '@react-navigation/native';

type Props = {
  author: { id: string; name: string };
  body: string;
  handleOnPressAuthor: (text: string) => void;
  handleOnPressPost: (body: string, title: string) => void;
  title: string;
  publishedAt: Date;
};

const PostItem: React.FC<Props> = ({
  author,
  body,
  handleOnPressAuthor,
  handleOnPressPost,
  title,
  publishedAt,
}) => {
  const { colors } = useTheme();

  const getSummary = (body: string): string => {
    let summary = body.substring(2, body.indexOf('##'));
    return summary.trim();
  };
  
  return (
    <TouchableOpacity
      style={styles(colors).post}
      onPress={() => handleOnPressPost(body, title)}
    >
      <Text style={styles(colors).postTitle}>{title}</Text>
      <Text
        onPress={() => handleOnPressAuthor(author.name)}
        style={styles(colors).postAuthor}
      >{`By: ${author.name}`}</Text>
      <Text style={styles(colors).postSummary}>{`Summary: ${getSummary(
        body
      )}`}</Text>
      <Text style={styles(colors).postDate}>{`Published: ${moment(
        publishedAt
      ).format('DD MMM YYYY')}`}</Text>
    </TouchableOpacity>
  );
};


const styles = (colors: {
  background?: string;
  border: any;
  card: any;
  primary?: string;
  secondary?: string;
  text: any;
}) =>
  StyleSheet.create({
    post: {
      backgroundColor: colors.card,
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      borderLeftColor: colors.border,
      borderLeftWidth: 1,
      borderRightColor: colors.border,
      borderRightWidth: 1,
      borderTopColor: colors.border,
      borderTopWidth: 1,
      flex: 1,
      justifyContent: 'space-between',
      marginBottom: 10,
      marginLeft: 7,
      marginRight: 7,
      marginVertical: 10,
      paddingHorizontal: 5,
    },
    postAuthor: {
      bottom: 0,
      color: colors.secondary,
      fontSize: 15,
    },
    postDate: {
      color: colors.text,
    },
    postSummary: {
      color: colors.text,
    },
    postTitle: {
      color: colors.text,
      fontSize: 18,
      flex: 1,
    },
  });

export default PostItem;
