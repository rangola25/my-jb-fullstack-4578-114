import { NextFunction, Request, Response } from "express";
import { ToysModel } from "../../models/toy";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/twitter-error";

export async function getAllToys(req: Request, res: Response, next: NextFunction) {
    try {        
        const types = await ToysModel.find();
    
        res.json(types.map(doc => doc.toObject()));
    
    } catch (e) {
        next(e); 
    }
}

export async function getAllByPrice(req: Request, res: Response, next: NextFunction) {
    try {
        const maxPrice = parseFloat(req.params.price); 
        
        const types = await ToysModel.find({ price: { $lte: maxPrice } });
    
        res.json(types.map(doc => doc.toObject()));
    
    } catch (e) {
        next(e); 
    }
}

export async function create(req: Request<{}, {}, {}>, res: Response, next: NextFunction) {
    try {
        const toy = new ToysModel(req.body)
        await toy.save()
        res.json(toy.toObject())
    } catch (e) {
        next(e)
    }
  }

export async function deleteToy(req: Request<{id: string}>, res: Response, next: NextFunction) {
try {
    const _id = req.params.id

    const deleteResponse = await ToysModel.deleteOne({ _id })

      if(deleteResponse.deletedCount === 0) return next(new AppError(StatusCodes.NOT_FOUND, 'the post you were trying to delete does not exist'))

      res.json({
          success: true
      })
} catch (e) {
    next(e)
}
}