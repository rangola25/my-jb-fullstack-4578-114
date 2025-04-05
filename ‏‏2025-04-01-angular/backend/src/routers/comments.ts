import { Router } from "express";
import { addComment, deleteComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import { deleteCommentParamsValidator, newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import paramsValidation from "../middlewares/params-validation";
import enforceAuth from "../middlewares/enforce-auth";

const commentRouter = Router()

commentRouter.use(enforceAuth)

commentRouter.post('/:postId', validation(newCommentValidator), paramsValidation(newCommentParamsValidator), addComment)
commentRouter.post('/:postId/:commentId', paramsValidation(deleteCommentParamsValidator), deleteComment)

export default commentRouter