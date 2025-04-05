import mongoose from "../db/mongoose"

export interface Village {
    id: string,
    name: string
}

const VillageSchema = new mongoose.Schema<Village>({
    id: String,
    name: String,
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const VillageModel = mongoose.model<Village>('Village', VillageSchema, 'villages')