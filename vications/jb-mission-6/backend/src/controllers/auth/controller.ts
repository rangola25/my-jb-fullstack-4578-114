import e, { NextFunction, Request, Response } from "express";
import { createHmac } from "crypto";
import config from 'config'
import { sign } from "jsonwebtoken";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import User from "../../models/user";


function hashPassword(password: string): string {
    return createHmac('sha256', config.get<string>('app.secret'))
            .update(password)
            .digest('hex')
}

export async function login(req: Request<{}, {}, {email: string, password: string}>, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: {
                email,
                password: hashPassword(password)
            },
        })

        if(!user) return next(new AppError(StatusCodes.UNAUTHORIZED, 'wrong credentials'))

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))
        const isAdmin = user.role === 'admin' ? true : false;
        res.json({ "jwt": jwt, "isAdmin": isAdmin })
    } catch (e) {
        next(e)
    }
}

export async function signup(req: Request<{}, {}, {role?: string, email: string, password: string, firstName: string, lastName: string}>, res: Response, next: NextFunction) {
    const { email, password, firstName, lastName, role } = req.body
    try {

        if(await User.findOne({
            where: {
            email 
        }})) {
            next(new AppError(StatusCodes.BAD_REQUEST, 'Email already exists!'))
        }

        const user = await User.create({ 
            email,
            firstName,
            lastName,
            role,
            password: hashPassword(password)
        })

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))
        res.json({ jwt })

    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') return next(
            new AppError(
                StatusCodes.CONFLICT, 
                `email ${email} already exists. Please choose another email.`
            )
        )
        next(e)
    }
}