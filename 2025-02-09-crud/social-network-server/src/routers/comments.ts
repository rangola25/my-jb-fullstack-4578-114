import { Router } from "express";
import { addComment } from "../controllers/profile/controller";

const commentRouter = Router()

commentRouter.post('/:id', addComment)

export default commentRouter