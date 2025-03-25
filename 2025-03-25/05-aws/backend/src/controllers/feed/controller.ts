import { NextFunction, Request, Response } from "express";
// import User from "../../models/user";
// import Post from "../../models/post";
// import postIncludes from "../common/post-includes";
import sequelize from "../../db/sequelize";
import { PostModel } from "../../models/post";
import { UserModel } from "../../models/user";
// import jwtHeaders from "../common/jwt";

export async function getFeed(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.userId;

    const user = await UserModel.findById(userId)

    const feed = await PostModel.find({
      userId: {
        $in: user.following
      }
    })
    res.json(feed.map(post => post.toObject()))      
  } catch (e) {
    next(e)
  }
}