import Joi from "joi";

export const createFurnitureValidator = Joi.object({
    name: Joi.string().max(255).required(),
    dimensions: Joi.string().max(40).required(),
    price: Joi.number().min(0).required(),
    color: Joi.string().max(40).required(),
})

export const updateFurnitureValidator = createFurnitureValidator