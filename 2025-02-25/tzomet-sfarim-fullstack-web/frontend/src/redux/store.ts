import { configureStore } from "@reduxjs/toolkit";
import { giftsSlice } from "./giftsSlice";

const store = configureStore({
    reducer: { // i.e. slices
        // following: followingSlice.reducer, // i.e a single slice
        gifts: giftsSlice.reducer,
        // feed: feedSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch