import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCommentsAsync} from '../redux/slices/commentsSlice';
import {RootState} from '../redux/rootReducer';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParams} from '../navigation/AppNavigator';

const PostDetailsScreen = () => {
  const {
    params: {postId, postTitle, postBody},
  } = useRoute<RouteProp<MainStackParams, 'PostDetails'>>();
  const dispatch = useDispatch();

  const {comments, status} = useSelector((state: RootState) => state.comments);
  const userImage = require('../assets/images/userImage.png');
  const userAvatar = require('../assets/images/avatar.png');

  useEffect(() => {
    dispatch<any>(fetchCommentsAsync(postId));
  }, [dispatch, postId]);

  if (status === 'loading') {
    return (
      <View style={styles.loadingContent}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={userImage} style={styles.avatar} />
        <Text style={styles.userName}>Ahmed Ezzat</Text>
      </View>
      <Text style={styles.title}>{postTitle}</Text>
      <Text style={styles.body}>{postBody}</Text>
      <Text style={styles.commentsTitle}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <View style={styles.commentContainer}>
            <Image source={userAvatar} style={styles.commentAvatar} />
            <View style={styles.commentContent}>
              <Text style={styles.commentName}>{item.name}</Text>
              <Text style={styles.commentBody}>{item.body}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        style={styles.commentsList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  body: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  commentBody: {
    fontSize: 16,
    color: '#666',
  },
  commentsList: {
    flexGrow: 0,
  },
  loadingContent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default PostDetailsScreen;
