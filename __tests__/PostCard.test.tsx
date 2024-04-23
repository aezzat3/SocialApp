import React from 'react';
import {render} from '@testing-library/react-native';
import {Post} from '../src/redux/slices/postsSlice';
import PostCard from '../src/components/PostCard';

const mockPost: Post = {
  id: 1,
  user_id: 1,
  title: 'Test Post',
  body: 'This is a test post body.',
  createdAt: new Date().toISOString(),
};

jest.mock('moment', () => () => ({
  fromNow: () => '2 hours ago',
}));

describe('<PostCard />', () => {
  it('renders the post details', () => {
    const {getByText: queryByText} = render(
      <PostCard post={mockPost} onPress={() => {}} />,
    );

    const titleElement = queryByText(mockPost.title);
    const bodyElement = queryByText(mockPost.body);
    const timeElement = queryByText('2 hours ago');
    const userNameElement = queryByText('Ahmed Ezzat');

    expect(titleElement).toBeDefined();
    expect(bodyElement).toBeDefined();
    expect(timeElement).toBeDefined();
    expect(userNameElement).toBeDefined();
  });
});
