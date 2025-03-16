import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/app-error";
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

export async function getSingleVacation(req: Request, res: Response, next: NextFunction) {
    try {
        const vacation = await Vacation.findByPk(req.params.id)
        res.json(vacation)
    } catch (e) {
        next(e)
    }
}

export async function editVacation(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
      const vacation = await Vacation.findByPk(req.params.id);
      const { destination ,description, startDate, endDate, price, file } = req.body;
      vacation.destination = destination;
      vacation.description = description;
      vacation.startDate = startDate;
      vacation.endDate = endDate;
      vacation.price = price;

      if(req.body.file) {
        const { file } = req.body
        vacation.file = file
      }

      await vacation.save();
      res.json(vacation);
    } catch (e) {
      next(e);
    }
  }

  export async function createVacation(req: Request, res: Response, next: NextFunction) {
    try {
        // if(req.imageUrl) {
        //     const { imageUrl } = req
        //     createParams = { ...createParams, imageUrl }
        // }

        const vacation = await Vacation.create(req.body)
        await vacation.reload()
        res.json(vacation)
        // socket.emit('newPost', post)
    } catch (e) {
        next(e)
    }
}

export async function deleteVacation(req: Request<{id: string}>,res: Response,next: NextFunction) {
    try {
      const id = req.params.id;
      const deletedRows = await Vacation.destroy({
        where: { id },
      });
  
      if (deletedRows === 0) return next(new AppError(
          StatusCodes.NOT_FOUND,
          "The vacation you were trying to delete does not exist"
         ));
  
      res.json({
        success: true,
      });
    } catch (e) {
      next(e);
    }
  }