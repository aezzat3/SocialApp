import React from 'react';
import {render} from '@testing-library/react-native';
import CommentCard from '../src/components/CommentCard';

const mockComment = {
  id: 1,
  post_id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  body: 'This is a test comment.',
};

describe('<CommentCard />', () => {
  it('renders the comment name and body', () => {
    const {getByText} = render(<CommentCard comment={mockComment} />);

    const nameElement = getByText(mockComment.name);
    const bodyElement = getByText(mockComment.body);

    expect(nameElement).toBeDefined();
    expect(bodyElement).toBeDefined();
  });
});
