import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Present from "../models/present/Present";

interface giftsState {
    gifts: Present[]
}

const initialState: giftsState = {
    gifts: []
}

export const giftsSlice = createSlice({
    name: 'presents',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Present[]>) => {
            state.gifts = action.payload
        },
        // newPost: (state, action: PayloadAction<Post>) => {
        //     state.posts = [action.payload, ...state.posts]
        // },
        // remove: (state, action: PayloadAction<{id: string}>) => {
        //     state.posts = state.posts.filter(p => p.id !== action.payload.id)
    }
})

export const { init } = giftsSlice.actions

export default giftsSlice.reducer
