import Joi from "joi";

export const followValidatorParams = Joi.object({
    vacationId: Joi.string().uuid().required()
})

export const followValidatorReq = Joi.object({
    userId: Joi.string().uuid().required()
})

export const unfollowValidatorParams = followValidatorParams
export const unfollowValidatorReq = followValidatorReq