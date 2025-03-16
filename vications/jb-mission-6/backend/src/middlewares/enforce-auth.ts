import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import config from 'config'
import User from "../models/user"
import { error } from "console";

declare global {
    namespace Express {
        interface Request {
            userId: string,
            role: string
        }
    }
}

export function enforceAuth(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) return next(new AppError(StatusCodes.UNAUTHORIZED, 'missing authorization header'))

    const parts = authorizationHeader.split(' ')

    if (parts.length !== 2 ) return next(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))
    if (parts[0] !== 'Bearer' ) return next(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))

    try {
        const user = verify(parts[1], config.get<string>('app.jwtSecret')) as User
        req.userId = user.id
        next()
    } catch (e) {
        next(new AppError(StatusCodes.UNAUTHORIZED, 'invalid JWT'))
    }
}

export function enforceRoleAdmin(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) return next(new AppError(StatusCodes.UNAUTHORIZED, 'missing authorization header'))

    const parts = authorizationHeader.split(' ')

    if (parts.length !== 2 ) return next(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))
    if (parts[0] !== 'Bearer' ) return next(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))

    try {
        const user = verify(parts[1], config.get<string>('app.jwtSecret')) as User
        req.role = user.role
        if (!(req.role === "admin")) {
            next(error)
        }
        next()
    } catch (e) {
        next(new AppError(StatusCodes.UNAUTHORIZED, 'invalid JWT'))
    }
}
