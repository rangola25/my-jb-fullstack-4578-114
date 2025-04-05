import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Vacation from "../models/vacation/Vacation";

interface VacationState {
    vacations: Vacation[]
}

const initialState: VacationState = {
    vacations: []
}

export const vacationSlice = createSlice({
    name: 'Vacations',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Vacation[]>) => {
            state.vacations = action.payload
        },
        newVacation: (state, action: PayloadAction<Vacation>) => {
            state.vacations = [action.payload, ...state.vacations]
        },
        remove: (state, action: PayloadAction<{id: string}>) => {
            state.vacations = state.vacations.filter(v => v.id !== action.payload.id)
        }, 
        update: (state, action: PayloadAction<Vacation>) => {
            const index = state.vacations.findIndex(v => v.id === action.payload.id)
            if(index > -1) {
                state.vacations[index] = action.payload
            }
        }
    }
})

export const { init, newVacation, remove, update } = vacationSlice.actions

export default vacationSlice.reducer
