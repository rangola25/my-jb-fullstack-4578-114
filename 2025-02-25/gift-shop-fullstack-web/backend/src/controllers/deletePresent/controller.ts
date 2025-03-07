import { NextFunction, Request, Response } from "express";
import Presents from "../../models/presents";

    export async function remove(req: Request<{code: string}>, res: Response, next: NextFunction) {
        try {
            const { code } = req.params
            await Presents.destroy({where: {code}})
            res.json({success: true})
        } catch (e) {
            next(e)
        }
    }