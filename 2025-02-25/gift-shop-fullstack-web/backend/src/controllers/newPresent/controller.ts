import { NextFunction, Request, Response } from "express";
import Presents from "../../models/presents";
import TargetAudience from "../../models/targetAudience";

export async function addNewPresent(req: Request, res: Response, next: NextFunction) {
    try {
        const audienceName = req.body.type;

        const targetAudience = await TargetAudience.findOne({
            where: { type: audienceName }, 
            attributes: ['code'] 
        });

        // if (!targetAudience) return res.status(400).json({ error: 'Invalid audience name' });
        
        const audienceCode = targetAudience.code;

        const present = await Presents.create({ ...req.body, targetCode: audienceCode })
        await present.reload({
            include: [TargetAudience],
            },
        )
        res.json(present)
    } catch (e) {
        next(e)
    }
}
