import { NextFunction, Request, Response } from "express";
import { TypesModel } from "../../models/type";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        //   const userId = req.userId
    
          const types = await TypesModel.find()
          console.log(types);
    
          res.json(types.map(doc => doc.toObject()))
    
      } catch (e) {
          next(e)
      }
}