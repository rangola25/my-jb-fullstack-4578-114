import { NextFunction, Request, Response } from "express";
import Book from "../../models/book";
import { Model, Op } from "sequelize";
import Author from "../../models/author";

export async function getBooks(req: Request, res: Response, next: NextFunction) {
    try {
        const books = await Book.findAll({
            include: [ Author ]
    });
        res.json(books);
    } catch (e) {
        next(e)
    }
}

export async function findBook(req: Request, res: Response, next: NextFunction) {
    try {
        const search = req.params.name;

        const book = await Book.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`  
                }
            },
            include: [ Author ]
        })
        res.json(book)
    } catch (e) {
        next(e)
    }
}

export async function newBook(req: Request, res: Response, next: NextFunction) {
    try {
        const firstNameAuthor = req.body.firstName;
        const lastNameAuthor = req.body.lastName;

        const whichAuthor = await Author.findOne({
            where: { 
                firstName: firstNameAuthor,
                lastName: lastNameAuthor
             }, 
            attributes: ['id'] 
        });
        
        const authorId = whichAuthor.id;

        const book = await Book.create({ ...req.body, authorId: authorId })
        await book.reload({
            include: [ Author ],
            },
        )
        res.json(book)
    } catch (e) {
        next(e)
    }
}

export async function deleteBook(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await Book.destroy({where: {id}})
        res.json({success: true})
    } catch (e) {
        next(e)
    }
}