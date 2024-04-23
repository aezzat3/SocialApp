import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import commentsReducer from './slices/commentsSlice';

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
