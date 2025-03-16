import { configureStore } from "@reduxjs/toolkit";
import { vacationSlice } from "./vacationSlice";
import { followingSlice } from "./followingSlice";

const store = configureStore({
    reducer: { 
        following: followingSlice.reducer, 
        vacations: vacationSlice.reducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch