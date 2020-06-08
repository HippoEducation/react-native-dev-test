import { ScrollView, StyleSheet, Text } from 'react-native';

import { HomeStackParamList } from '../HomeStackParamList';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

type Props = {
  route: RouteProp<HomeStackParamList, 'Details'>;
};

const PostDetails: React.FC<Props> = ({ route }) => {
  const { colors } = useTheme();

  return (
    <ScrollView style={styles(colors).container}>
      <Text style={styles(colors).postTitle}>{route.params.title}</Text>
      <Text style={styles(colors).postBody}>{route.params.body}</Text>
    </ScrollView>
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
    container: {
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
      marginBottom: 10,
      marginLeft: 7,
      marginRight: 7,
      marginVertical: 10,
      paddingHorizontal: 5,
    },
    postBody: {
      color: colors.text,
      fontSize: 12,
    },
    postTitle: {
      color: colors.text,
      fontSize: 20,
      marginBottom: 10,
    },
  });

export default PostDetails;
