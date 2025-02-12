import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { createHmac } from "crypto";
import config from 'config'
import { sign } from "jsonwebtoken";
import TwitterError from "../../errors/twitter-error";

function hashPassword(password: string): string {
    return createHmac('sha256', config.get<string>('app.secret'))
            .update(password)
            .digest('hex')
}

export async function login(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
        const { username, password } = req.body
        const user = await User.findOne({
            where: {
                username,
                password: hashPassword(password)
            }
        })

        if(!user) return next(new TwitterError(
            401,
            'wrong credentials'
        ))

        const jwt = sign(user.get({plain: true}), config.get<string>('app.jwtSecret'))
        res.json({jwt})
    } catch (e) {
        next(e)
    }
}

export async function signUp(
    req: Request<{}, {}, {username: string, password: string, name: string}>,
    res: Response,
    next: NextFunction
  ) {
    try {
        const { username, password, name } = req.body
        const newUser = await User.create({ username, password: hashPassword(password), name })

        const jwt = sign(newUser.get({plain: true}), config.get<string>('app.jwtSecret'))
        res.json({jwt})
    } catch (e) {
        // if(e.name === 'SequelizeUniqueConstraintError') return next({
        //     status: 409,
        //     message: `username ${req.body.username} already exist, please choose another one`
        if(e.name === 'SequelizeUniqueConstraintError') return next(
            new TwitterError(
                409,
                `username ${req.body.username} already exist, please choose another one`
            )
        )
        next(e)
    }
}