import axios from 'axios';
import { BASE_URL } from '../common/Constants';
import { Post } from '../redux/slices/postsSlice';
import { Comment } from '../redux/slices/commentsSlice';


export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    return response.data;
};

export const fetchCommentsByPostId = async (postId: number): Promise<Comment[]> => {
    const response = await axios.get<Comment[]>(`${BASE_URL}/posts/${postId}/comments`);
    return response.data;
};
