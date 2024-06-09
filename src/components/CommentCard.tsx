import React from 'react';
import {View, Text} from 'react-native';
import {Comment} from '../redux/slices/commentsSlice';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({comment}) => {
  return (
    <View
      style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
      <Text>{comment.name}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
};

export default CommentCard;
