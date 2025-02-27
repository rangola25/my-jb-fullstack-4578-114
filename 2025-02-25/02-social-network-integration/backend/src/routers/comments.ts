import { Router } from "express";
import { addComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import { newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import paramsValidation from "../middlewares/params-validation";

const commentRouter = Router()

commentRouter.post('/:postId', validation(newCommentValidator), paramsValidation(newCommentParamsValidator), addComment)

export default commentRouter