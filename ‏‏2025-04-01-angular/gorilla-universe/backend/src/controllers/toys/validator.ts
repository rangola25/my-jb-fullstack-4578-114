import Joi from "joi";

export const newToyValidator = Joi.object({
    typeId: Joi.string().required(),
    name: Joi.string().min(2).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().required()
})
