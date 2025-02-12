import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post"; 
import Comment from "../models/comment/Comment";

    interface ProfileState {
    post: Post[]
    }

    const initialState: ProfileState = {
    post: []
    }

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.post = action.payload                        
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.post.push(action.payload)
        },
        deletePost: (state, action: PayloadAction<Post>) => {
            state.post = state.post.filter(p => p.id !== action.payload.id)
        },
        editPost: (state, action: PayloadAction<Post>) => {
            const index = state.post.findIndex(p => p.id === action.payload.id);
            if (index > -1) {
                state.post[index] = action.payload;
            }
        },
        postComment: (state, action: PayloadAction<Comment>) => {
            const { ...comment } = action.payload;  
            const post = state.post.find(p => p.id === comment.postId);  
      
            if (post) {
              post.comments.push(comment);  
            }
        }
    }
})

export const { init, addPost, deletePost, editPost, postComment } = profileSlice.actions;

export default profileSlice.reducer; 
