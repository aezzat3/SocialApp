import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Comment} from '../redux/slices/commentsSlice';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({comment}) => {
  return (
    <View style={styles.card}>
      <Text>{comment.name}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
export default CommentCard;
