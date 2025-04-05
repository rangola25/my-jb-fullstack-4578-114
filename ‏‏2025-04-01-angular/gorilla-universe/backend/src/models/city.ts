import mongoose from "../db/mongoose"
import { Village } from "./village"

export interface City {
    id: string,
    name: string,
    villages: Village[]
}

const CitiesSchema = new mongoose.Schema<City>({
    id: String,
    name: String,
    villages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Village' }]
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const CityModel = mongoose.model<City>('City', CitiesSchema, 'cities')