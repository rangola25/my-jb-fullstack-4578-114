import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import config from "config";
import User from "../models/user";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      role: string;
    }
  }
}

function parseJwt(authorizationHeader: string, req: Request) {
  const parts = authorizationHeader.split(" ");

  if (parts.length !== 2) throw new Error("Bad authorization header format");

  if (parts[0] !== "Bearer") throw new Error("Authorization header must be 'Bearer'");

  try {
    const user = verify(parts[1], config.get<string>("app.jwtSecret")) as User;
    req.userId = user.id;
    req.role = user.role;
  } catch (e) {
    throw new Error("Invalid or expired JWT");
  }
}

export function enforceAuth(req: Request, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return next(new AppError(StatusCodes.UNAUTHORIZED, "Missing authorization header"));
  }

  try {
    parseJwt(authorizationHeader, req);
    next();
  } catch (e) {
    next(new AppError(StatusCodes.UNAUTHORIZED, e.message));
  }
}

export function enforceRoleAdmin(req: Request, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return next(new AppError(StatusCodes.UNAUTHORIZED, "Missing authorization header"));
  }

  try {
    parseJwt(authorizationHeader, req);

    if (req.role !== "admin") {
      return next(new AppError(StatusCodes.FORBIDDEN, "Access denied. Admins only!"));
    }

    next();
  } catch (e) {
    next(new AppError(StatusCodes.UNAUTHORIZED, e.message));
  }
}
