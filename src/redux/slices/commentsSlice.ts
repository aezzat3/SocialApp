import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsByPostId } from '../../services/api';

export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

interface CommentsState {
    comments: Comment[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const fetchCommentsAsync = createAsyncThunk<Comment[], number>(
    'comments/fetchComments',
    async (postId: number) => {
        const comments = await fetchCommentsByPostId(postId);
        return comments;
    }
);

const initialState: CommentsState = {
    comments: [],
    status: 'idle',
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            });
    },
});

export default commentsSlice.reducer;
