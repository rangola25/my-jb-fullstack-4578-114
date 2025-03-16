import Vacation from "../../models/vacation"
import { NextFunction, Request, Response } from "express";

export async function getVacations(req: Request, res: Response, next: NextFunction) {
    try {
        const vacations = await Vacation.findAll()
        res.json(vacations)
    } catch (e) {
        next(e)
    }
}