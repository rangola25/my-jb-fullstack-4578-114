import { NextFunction, Request, Response } from "express";
// import User from "../../models/furniture";
// import AppError from "../../errors/app-error";
// import { StatusCodes } from "http-status-codes";
import Furniture from "../../models/furniture";

export async function getFurniture(req: Request, res: Response, next: NextFunction) {
    try {
        const furniture = await Furniture.findAll()
        // console.log(user.get({ plain: true }))
        res.json(furniture)

    } catch (e) {
        next(e)
    }
}

export async function createFurniture(req: Request<{}, {}, {
    name: string,
    dimensions: string,
    color: string,
    price: number,
}>, res: Response, next: NextFunction) {
    try {
        const furniture = await Furniture.create(req.body)
        res.json(furniture)
    } catch (e) {
        next(e)
    }
}