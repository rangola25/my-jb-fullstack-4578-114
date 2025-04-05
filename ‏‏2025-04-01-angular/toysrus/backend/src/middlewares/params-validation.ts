import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

import { StatusCodes } from "http-status-codes";
import AppError from "../errors/twitter-error";

export default function paramsValidation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.params = await validator.validateAsync(req.params)
            next()
        } catch (e) {
            next(new AppError(StatusCodes.UNPROCESSABLE_ENTITY, e.message))
        }
    }
}
