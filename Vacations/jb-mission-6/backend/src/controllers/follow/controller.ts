import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/app-error";
import Follow from "../../models/follow";
import { NextFunction, Request, Response } from "express";

export async function getLikesOfTheVacations(req: Request, res: Response, next: NextFunction) {
    try {
      const likes = await Follow.findAll();
      
        const vacationCount = likes.reduce((acc, like) => {
        const vacationId = like.vacationId; 
        if (acc[vacationId]) {
          acc[vacationId] += 1;
        } else {
          acc[vacationId] = 1;
        }
        return acc;
      }, {});
  
      const result = Object.keys(vacationCount).map((vacationId) => ({
        vacationId,   
        number: vacationCount[vacationId]
      }));
  
      res.json(result);
    } catch (e) {
      console.error('Error fetching vacation likes:', e);
      next(e); 
    }
  }

  export async function getAllFollows(req: Request, res: Response, next: NextFunction) {
    try {
      const likes = await Follow.findAll();
      res.json(likes);
    } catch (e) {
      console.error(e);
      next(e); 
    }
  }

  export async function likeVacation(req: Request<{vacationId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const vacationId = req.params.vacationId
        const like = await Follow.create({
            userId,
            vacationId
        })
        res.json(like)
    } catch(e) {
        next(e)
    }
  }

  export async function unlikeVacation(req: Request<{vacationId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const vacationId = req.params.vacationId
        const unlike = await Follow.destroy({
            where: {
                userId,
                vacationId
            }
        })

        if(!unlike) return next(new AppError(
            StatusCodes.NOT_FOUND,
            'Tried to delete unexciting record'
        ))

        res.json({ success: true })
    } catch(e) {
        next(e)
    }
  }