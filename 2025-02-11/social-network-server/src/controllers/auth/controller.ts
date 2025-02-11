import { NextFunction, Request, Response } from "express";
import User from "../../models/user";

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
                password
            }
        })
        res.json(user)
    } catch (e) {
        next(e)
    }
}