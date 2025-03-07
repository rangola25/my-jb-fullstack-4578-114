import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import postIncludes from "../common/post-includes";
import sequelize from "../../db/sequelize";
import jwtHeaders from "../common/jwt";

export async function getFeed(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = await jwtHeaders( req, res, next );

    const user = await User.findByPk(userId, {
      include: [
        {
            model: User,
            as: 'following',
            include: [ {
              model: Post,
              ...postIncludes
        }]
        },
      ],
    });

    const feed = user.following.reduce((cumulative: Post[], { posts }) => {
        return [...cumulative, ...posts]
    }, []).sort((a: Post, b: Post) => a.createdAt < b.createdAt ? 1 : -1)

    res.json(feed);

    // const feed = sequelize.query(`
    //   SELECT posts.*
    //   from posts
    //   join follows on posts.user_id = follows.followee_id
    //   AND follows.follower_id = ?
    //   `, {
    //     replacements: [ userId ],
    //     model: Post
    //   }
    // )

    // await Promise.all((await feed).map(post => post.reload({...postIncludes})))
    // res.json(feed)
    
  } catch (e) {
    next(e);
  }
}