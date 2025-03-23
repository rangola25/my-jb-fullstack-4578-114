import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import postIncludes from "../common/post-includes";
import AppError from "../../errors/twitter-error";
import { StatusCodes } from "http-status-codes";
import { JwtPayload, verify } from "jsonwebtoken";
import jwtHeaders from "../common/jwt";
import socket from "../../io/io";
import SocketMessages from "socket-enums-rango25"

export async function getProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = await jwtHeaders( req, res, next );

    const user = await User.findByPk(userId, {
      include: [
        {
          model: Post,
          ...postIncludes,
        }
      ],
      // order: [{'createdAt', 'asc'}]
    })
    res.json(user.posts);
  } catch (e) {
    next(e);
  }
}

export async function getPost(req: Request<{id: string}>, res: Response, next: NextFunction) {
  try {
    const post = await Post.findByPk(req.params.id, postIncludes);
    res.json(post);
  } catch (e) {
    next(e);
  }
}

export async function deletePost(
  req: Request<{id: string}>,
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

    if (deletedRows === 0) return next(new AppError(
        StatusCodes.NOT_FOUND,
        "the post you were trying to delete does not exist"
       ));

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
    const userId = await jwtHeaders( req, res, next );

    let createParams = { ...req.body, userId }

    if(req.imageUrl) {
      const { imageUrl } = req
      createParams = { ...createParams, imageUrl }
  }

    const post = await Post.create(createParams);
    await post.reload(postIncludes);
    res.json(post);
    socket.emit(SocketMessages.NEW_POST, {
      from: req.headers['x-client-id'],
      data: post
    })
  } catch (e) {
    next(e);
  }
}

export async function updatePost(
  req: Request<{id: string}>, 
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

