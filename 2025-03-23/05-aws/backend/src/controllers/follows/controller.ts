import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";
import { col } from "sequelize";
import AppError from "../../errors/twitter-error";
import { StatusCodes } from "http-status-codes";
import jwtHeaders from "../common/jwt";

export async function getFollowers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = await jwtHeaders( req, res, next );
  
      const user = await User.findByPk(userId, {
        include: [{
          model: User,
          as: "followers",
        }],
        order: [[col('followers.name'), 'ASC']],
      });
      res.json(user.followers);
    } catch (e) {
      next(e);
    }
  }
  
  export async function getFollowee(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = await jwtHeaders( req, res, next );
  
      const user = await User.findByPk(userId, {
        include: [{
          model: User,
          as: "following",
        }],
      });
      res.json(user.following);
    } catch (e) {
      next(e);
    }
  }
  
  export async function follow(
      req: Request<{id: string}>,
      res: Response,
      next: NextFunction
    ) {
      try {
        const userId = await jwtHeaders( req, res, next );
        const followeeId = req.params.id;
        const toInsert = { followerId: userId, followeeId: followeeId };
        const follower = await Follow.create(toInsert);
        res.json(follower);
      } catch (e) {
        next(e);
      }
    }
    
    export async function unfollow(
        req: Request<{id: string}>,
        res: Response,
        next: NextFunction
      ) {
        try {
          // const post = await Post.findByPk(req.params.id)
          // await post.destroy()
          const followee_id = req.params.id;
          const follower_id = "1230ae30-dc4f-4752-bd84-092956f5c633"
          const isUnfollowed = await Follow.destroy({
            where: { follower_id, followee_id },
          }); 
          
          if (!isUnfollowed) return next(new AppError(
            StatusCodes.NOT_FOUND,
            'the unfollow you were trying to do, does not exist'
        ))
            
          res.json({
            success: true,
          });
        } catch (e) {
          next(e);
        }
      }