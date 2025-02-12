import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post"; 
import Comment from "../models/comment/Comment";

interface ProfileState {
    posts: Post[],
    selectedPost: Post | null
}

const initialState: ProfileState = {
    posts: [],
    selectedPost: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;                       
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts.unshift(action.payload);
        },
        remove: (state, action: PayloadAction<{ id: string }>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id);
        },
        getSinglePost: (state, action: PayloadAction<string>) => {
            state.selectedPost = state.posts.find(p => p.id === action.payload) || null;
        },
        update: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            if (index > -1) {
                state.posts[index] = action.payload;
            }
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            const post = state.posts.find(p => p.id === action.payload.postId);
            if (post) {
                post.comments.push(action.payload);
            }
        }
    }
});

export const { init, newPost, remove, getSinglePost, update, addComment } = profileSlice.actions;

export default profileSlice.reducer;