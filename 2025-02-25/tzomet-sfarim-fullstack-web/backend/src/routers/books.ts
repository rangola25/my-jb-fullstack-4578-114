import { Router } from "express";
import { deleteBook, findBook, getBooks, newBook } from "../controllers/books/controller";

const booksRouter = Router()

booksRouter.get('/', getBooks)
booksRouter.get('/:name', findBook)
booksRouter.post('/new', newBook)
booksRouter.delete('/:id', deleteBook)
export default booksRouter