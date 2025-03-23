import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Like from "../models/like/Like";

interface FollowingState {
    likes: Like[]
    // currentUserId: string
}

const initialState: FollowingState = {
    likes: []
}

export const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Like[]>) => {
            state.likes = action.payload                        
        },
        unlike: (state, action: PayloadAction<{userId: string, vacationId: string}>) => {
            state.likes = state.likes.filter(l => l.userId !== action.payload.userId)
        },
        like: (state, action: PayloadAction<Like>) => {
            state.likes.push(action.payload)
        }
    }
})

export const { init, unlike, like } = followingSlice.actions

export default followingSlice.reducer