import { NextFunction, Request, Response } from "express";
import socket from "../../io/io";
import SocketMessages from "socket-enums-rango25";
import { PostModel } from "../../models/post";

export async function addComment(
  req: Request<{postId: string}>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.userId

    const { postId } =  req.params ;

    const post = await PostModel.findByIdAndUpdate(postId, {
      $push: {
        comments: {...req.body, userId, user: userId, createdAt: new Date()}
      }
    }, {
      new: true
    })

    res.json(post.toObject)
  } catch (e) {
      next(e);
    }
  }

  export async function deleteComment(
    req: Request<{postId: string, commentId: string}>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.userId

      const { postId, commentId } =  req.params 

      const post = await PostModel.findByIdAndUpdate(postId, {
        $pull: {
          comments: {_id: commentId}
        }
      }, {
        new: true
      })
  
      res.json(post.toObject)

      
    } catch(e) {
      console.log(e)
    }
  
  
  }