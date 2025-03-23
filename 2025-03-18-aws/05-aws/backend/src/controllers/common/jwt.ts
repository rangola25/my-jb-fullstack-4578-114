import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/twitter-error";
import { StatusCodes } from "http-status-codes";
import { JwtPayload, verify } from "jsonwebtoken";
import config from 'config'

export default async function jwtHeaders(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return next(
          new AppError(StatusCodes.UNAUTHORIZED, "No token provided.")
        );
      }
  
      const decoded = verify(token, config.get<string>("app.jwtSecret"));
  
      if (typeof decoded !== "object" || !decoded || !("id" in decoded)) {
        return next(
          new AppError(StatusCodes.UNAUTHORIZED, "Invalid token structure.")
        );
      }

      const userId = (decoded as JwtPayload).id;

      return userId;
} 