import Joi, { optional } from "joi";

export const loginValidator = Joi.object({
    email: Joi.string().min(6).max(40).required(), 
    password: Joi.string().min(4).required()
})

export const signupValidator = loginValidator.append({
    firstName: Joi.string().min(2).max(40).required(),
    lastName: Joi.string().min(2).max(40).required(),
    role: Joi.string().optional()
})

export const loginValidatorAdmin = loginValidator.append({
    role: "admin"
})