import { NextFunction, Request, Response } from "express";
import TargetAudience from "../../models/targetAudience";


export async function getTargetAudience(req: Request, res: Response, next: NextFunction) {
    try {
        const audienceTypes = await TargetAudience.findAll({
            attributes: ['type'] 
        })
        res.json(audienceTypes)
    } catch (e) {
        next(e)
    }
}