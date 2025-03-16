import Joi from "joi";

export const newVacationValidatorAdmin = Joi.object({
    price: Joi.number().min(0).max(10000).required(),
    // id: Joi.string().uuid().required(),
    description: Joi.string().required(),
    destination: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    // file: Joi.string().optional()
    file: Joi.object({
        mimetype: Joi.string().valid('image/png', 'image/jpg', 'image/jpeg')
    }).unknown(true).optional()
    })

export const updateVacationValidatorAdmin = newVacationValidatorAdmin

export const validationVacationParamsAdmin = Joi.object({
    id: Joi.string().uuid().required()
})