import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import User from "../models/user/User"

interface followersSlice {
    followers : User[]
}

const initialState: followersSlice = {
    followers: []
}

export const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload       
        }                 
        // },
        // unfollow: (state, action: PayloadAction<{userId: string}>) => {
        //     state.followers = state.followers.filter(f => f.id !== action.payload.userId)
        // },
        // follow: (state, action: PayloadAction<User>) => {
        //     state.followers.push(action.payload)
        // }
    }
})

export const { init } = followersSlice.actions

export default followersSlice.reducer