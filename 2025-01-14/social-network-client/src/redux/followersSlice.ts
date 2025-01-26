import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import User from "../models/user/User"

interface FollowersState {
    followers : User[]
}

const initialState: FollowersState = {
    followers: []
}

export const followersState = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload                        
        },
        unfollow: (state, action: PayloadAction<{userId: string}>) => {
            state.followers = state.followers.filter(f => f.id !== action.payload.userId)
        },
        follow: (state, action: PayloadAction<User>) => {
            state.followers.push(action.payload)
        }
    }
})

export const { init, unfollow, follow } = followersState.actions

export default followersState.reducer