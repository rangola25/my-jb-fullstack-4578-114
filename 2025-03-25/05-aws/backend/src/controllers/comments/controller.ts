import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
// import User from "../../models/user";
// import jwtHeaders from "../common/jwt";
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
    //   const userId = await jwtHeaders( req, res, next );
      
    //   const toInsert = { postId, userId, body: req.body.body}
    //   const comment = await Comment.create(toInsert);
    //   await comment.reload({
    //     include: [ User ]
    //   })
    //   res.json(comment);
    //   socket.emit(SocketMessages.NEW_COMMENT, {
    //     from: req.headers['x-client-id'], 
    //     data: comment
    // })
  } catch (e) {
      next(e);
    }
  }