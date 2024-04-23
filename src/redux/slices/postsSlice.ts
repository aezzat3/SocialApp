import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../common/Constants';
import { fetchPosts } from '../../services/api';

export interface Post {
    id: number;
    user_id: number;
    title: string;
    body: string;
    createdAt?: string
}

export const fetchPostsAsync = createAsyncThunk<Post[]>(
    'posts/fetchPosts',
    async () => {
        const response = await fetchPosts();
        return response;
    },
);

interface PostsState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: PostsState = {
    posts: [],
    status: 'idle',
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            });
    },
});

export default postsSlice.reducer;
