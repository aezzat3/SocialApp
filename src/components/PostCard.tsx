import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Post} from '../redux/slices/postsSlice';
import moment from 'moment';

interface PostCardProps {
  post: Post;
  onPress: () => void;
}

const PostCard: React.FC<PostCardProps> = ({post, onPress}) => {
  const userAvatar = require('../assets/images/userImage.png');
  const like = require('../assets/images/like.png');
  const Comment = require('../assets/images/comment.png');
  const share = require('../assets/images/share.png');

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.userSection}>
        <Image source={userAvatar} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>Ahmed Ezzat</Text>
          <Text style={styles.postTime}>
            {moment(post.createdAt).fromNow()}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={like} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={Comment} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={share} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostCard;
