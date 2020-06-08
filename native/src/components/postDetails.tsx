import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../HomeStackParamList';
import { Post } from '../types';
import { RouteProp } from '@react-navigation/native';

type Props = {
    navigation: StackNavigationProp<HomeStackParamList, 'Details'>
    route: RouteProp<HomeStackParamList, 'Details'>
    body: string,
    title: string
}

const PostDetails: React.FC<Props> = ({navigation, route, body, title}) => {
    console.log(body)
    return (
      <View>
        <Text testID="title">{route.params.title}</Text>
        <Text testID="body">{route.params.body}</Text>
      </View>
    );
}

export default PostDetails;