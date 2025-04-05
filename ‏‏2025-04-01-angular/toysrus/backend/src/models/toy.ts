import mongoose from "../db/mongoose"
import { Type } from "./type"

export interface Toy {
    id: string,
    typeId: string,
    name: string,
    description: string,
    price: number
}

const ToySchema = new mongoose.Schema<Toy>({
    id: String,
    typeId: String,
    name: String,
    description: String,
    price: Number
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const ToysModel = mongoose.model<Toy>('Toy', ToySchema, 'toys')