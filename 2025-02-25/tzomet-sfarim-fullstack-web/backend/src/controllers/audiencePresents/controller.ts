import { NextFunction, Request, Response } from "express";
import TargetAudience from "../../models/targetAudience";
import Presents from "../../models/presents";

export async function getAllPresents(req: Request, res: Response, next: NextFunction) {
    try {
        const allPresents = await Presents.findAll();
      res.json(allPresents);
    } catch (e) {
        next(e)
    }
}

export async function getAudiencePresents(req: Request, res: Response, next: NextFunction) {
    try {
        const type = req.params.type;

        const targetAudience = await TargetAudience.findOne({
            where: { type: type }, 
            attributes: ['code'] 
        });

        const audienceCode = targetAudience.code

        const audienceTypes = await TargetAudience.findByPk(audienceCode, {
            include: [ Presents ]
        })
        res.json(audienceTypes.presents)
    } catch (e) {
        next(e)
    }
}