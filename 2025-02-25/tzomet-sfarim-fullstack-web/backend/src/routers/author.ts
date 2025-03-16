import { Router } from "express";
import { findAuthorById, getAuthors } from "../controllers/author/controller";

const authorRouter = Router()

authorRouter.get('/', getAuthors)
authorRouter.get('/:id', findAuthorById)
export default authorRouter