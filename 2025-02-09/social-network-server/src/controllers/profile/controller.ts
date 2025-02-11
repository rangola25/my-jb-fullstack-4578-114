import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import Comment from "../../models/comment";
import Follow from "../../models/follow";
import followeeRouter from "../../routers/follwee";

const postIncludes = {
  include: [
    User,
    {
      model: Comment,
      include: [User],
    },
  ],
};

export async function getProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = "1230ae30-dc4f-4752-bd84-092956f5c633";

    const user = await User.findByPk(userId, {
      include: [
        {
          model: Post,
          ...postIncludes,
        },
      ],
    });
    res.json(user.posts);
  } catch (e) {
    next(e);
  }
}

export async function getPost(req: Request, res: Response, next: NextFunction) {
  try {
    const post = await Post.findByPk(req.params.id, postIncludes);
    res.json(post);
  } catch (e) {
    next(e);
  }
}

export async function deletePost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // const post = await Post.findByPk(req.params.id)
    // await post.destroy()
    const id = req.params.id;
    const deletedRows = await Post.destroy({
      where: { id },
    });

    if (deletedRows === 0)
      return next({
        status: 404,
        message: "the post you were trying to delete does not exist",
      });

    res.json({
      success: true,
    });
  } catch (e) {
    next(e);
  }
}

export async function createPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = "1230ae30-dc4f-4752-bd84-092956f5c633";

    const post = await Post.create({ ...req.body, userId });
    await post.reload(postIncludes);
    res.json([post]);
  } catch (e) {
    next(e);
  }
}

export async function updatePost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const post = await Post.findByPk(req.params.id, postIncludes);
    const { title, body } = req.body;
    post.title = title;
    post.body = body;
    await post.save();
    res.json(post);
  } catch (e) {
    next(e);
  }
}

export async function getFollowers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = "1230ae30-dc4f-4752-bd84-092956f5c633";

    const followers = await User.findByPk(userId, {
      include: {
        model: User,
        as: "followers",
        through: { attributes: [] },
      },
    });
    res.json(followers.followers);
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
    const userId = "1230ae30-dc4f-4752-bd84-092956f5c633";

    const following = await User.findByPk(userId, {
      include: {
        model: User,
        as: "following",
        through: { attributes: [] },
      },
    });
    console.log(following);
    res.json(following.following);
  } catch (e) {
    next(e);
  }
}

export async function follow(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = "1230ae30-dc4f-4752-bd84-092956f5c633";
      const followerId = req.params.id;
      const toInsert = { followerId: followerId, followeeId: userId };
      const follower = await Follow.create(toInsert);
      // const postIncludes = {
      //   include: [
      //     User,
      //     {
      //       model: Comment,
      //       include: [User],
      //     },
      //   ],
      // };
      // await follower.reload({
      //   include: [
      //     {
      //       model: Follow,
      //       as: "followers",
      //       through: { attributes: [] },
      //     },
      //   ],
      // });
      res.json([follower]);
    } catch (e) {
      next(e);
    }
  }
  
  export async function unfollow(
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      try {
        // const post = await Post.findByPk(req.params.id)
        // await post.destroy()
        const follower_id = req.params.id;
        const followee_id = "1230ae30-dc4f-4752-bd84-092956f5c633"
        const deletedRows = await Follow.destroy({
          where: { follower_id, followee_id },
        });
    
        if (deletedRows === 0)
          return next({
            status: 404,
            message: "the post you were trying to delete does not exist",
          });
    
        res.json({
          success: true,
        });
      } catch (e) {
        next(e);
      }
    }

    export async function addComment(
        req: Request,
        res: Response,
        next: NextFunction
      ) {
        try {
            const userId = "1230ae30-dc4f-4752-bd84-092956f5c633";
            const postId = req.params.id;
            const toInsert = { postId: postId, userId: userId, body: req.body.body}
            const comment = await Comment.create(toInsert);
            res.json([comment]);
        } catch (e) {
            next(e);
          }
        }