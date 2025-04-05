import mongoose from "../db/mongoose"
import { Village } from "./village"

export interface Gorilla {
    id: string,
    name: string,
    sex: string,
    health: number,
    strength: number,
    speed: number,
    basketballSkills: number,
    soccerSkills: number,
    village: Village
}

const GorillaSchema = new mongoose.Schema<Gorilla>({
    id: String,
    name: String,
    sex: String,
    health: Number,
    strength: Number,
    speed: Number,
    basketballSkills: Number,
    soccerSkills: Number
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const ToysModel = mongoose.model<Gorilla>('Gorilla', GorillaSchema, 'gorillas')