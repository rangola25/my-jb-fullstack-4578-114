import { Router } from "express";
import validation from "../middlewares/validation";
import { newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";


const profileRouter = Router()

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', validation(newPostValidator), createPost)
profileRouter.patch('/', validation(updatePostValidator), updatePost)

export default profileRouter