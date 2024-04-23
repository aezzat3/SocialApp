import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useQuery} from 'react-query';
import {fetchPostsAsync, Post} from '../redux/slices/postsSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useQueryClient} from 'react-query';
import PostCard from '../components/PostCard';
import ShimmerLoader from '../components/ShimmerLoader';
import {MainStackParams} from '../navigation/AppNavigator';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const queryClient = useQueryClient();

  const {data: posts, status} = useQuery<Post[], Error>(
    'posts',
    async () => {
      const action = await dispatch<any>(fetchPostsAsync());
      return action.payload;
    },
    {
      retry: false,
      onSuccess: data => {
        queryClient.setQueryData('posts', data);
      },
    },
  );
  const handlePostPress = (
    postId: number,
    postTitle: string,
    postBody: string,
  ) => {
    navigation.navigate('PostDetails', {postId, postTitle, postBody});
  };

  if (status === 'loading') {
    return <ShimmerLoader />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PostCard
            post={item}
            onPress={() => handlePostPress(item.id, item.title, item.body)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
