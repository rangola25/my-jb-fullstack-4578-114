import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LikeDraft from "../models/like/LikeDraft";

interface FollowingState {
    likes: LikeDraft[]
    // currentUserId: string
}

const initialState: FollowingState = {
    likes: []
}

export const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<LikeDraft[]>) => {
            state.likes = action.payload                        
        },
        unlike: (state, action: PayloadAction<{userId: string, vacationId: string}>) => {
            state.likes = state.likes.filter(l => l.userId !== action.payload.userId)
        },
        like: (state, action: PayloadAction<LikeDraft>) => {
            state.likes.push(action.payload)
        }
    }
})

export const { init, unlike, like } = followingSlice.actions

export default followingSlice.reducer