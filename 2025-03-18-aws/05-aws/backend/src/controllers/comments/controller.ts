import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";
import jwtHeaders from "../common/jwt";
import socket from "../../io/io";
import SocketMessages from "socket-enums-rango25";

export async function addComment(
  req: Request<{postId: string}>,
  res: Response,
  next: NextFunction
) {
  try {
      const userId = await jwtHeaders( req, res, next );
      const { postId } =  req.params ;
      const toInsert = { postId, userId, body: req.body.body}
      const comment = await Comment.create(toInsert);
      await comment.reload({
        include: [ User ]
      })
      res.json(comment);
      socket.emit(SocketMessages.NEW_COMMENT, {
        from: req.headers['x-client-id'], 
        data: comment
    })
  } catch (e) {
      next(e);
    }
  }