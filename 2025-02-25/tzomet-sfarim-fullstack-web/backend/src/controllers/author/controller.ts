import { NextFunction, Request, Response } from "express";
import Author from "../../models/author";

export async function getAuthors(req: Request, res: Response, next: NextFunction) {
    try {
        const authors = await Author.findAll()
        res.json(authors)
    } catch (e) {
        next(e)
    }
}

export async function findAuthorById(req: Request, res: Response, next: NextFunction) {
    try {
        const search = req.params.id;

        const author = await Author.findOne({
            where: { id: search }
        })
        res.json(author)
    } catch (e) {
        next(e)
    }
}