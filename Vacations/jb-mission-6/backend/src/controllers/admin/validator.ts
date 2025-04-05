import Joi from "joi";

export const newVacationValidatorAdmin = Joi.object({
    destination: Joi.string().required(),
    description: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    price: Joi.number().min(0).max(10000).required(),
})

export const newVacationFilesValidator = Joi.object({
    file: Joi.object({
        mimetype: Joi.string().valid('image/png', 'image/jpg', 'image/jpeg')
    }).unknown(true).required()
})

export const updateVacationFilesValidator = Joi.object({
    file: Joi.object({
        mimetype: Joi.string().valid('image/png', 'image/jpg', 'image/jpeg')
    }).unknown(true).required()
})

export const updateVacationValidatorAdmin = newVacationValidatorAdmin

export const validationVacationParamsAdmin = Joi.object({
    id: Joi.string().uuid().required()
})