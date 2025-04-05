import mongoose from "../db/mongoose"

export interface Type {
    id: string,
    type: 'babies' | 'kids' | 'teen' | 'adults'
}

const TypeSchema = new mongoose.Schema<Type>({
    id: String,
    type: {
        type: String,
        enum: ['babies', 'kids', 'teen', 'adults'], 
        required: true
    }
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const TypesModel = mongoose.model<Type>('Type', TypeSchema, 'type')