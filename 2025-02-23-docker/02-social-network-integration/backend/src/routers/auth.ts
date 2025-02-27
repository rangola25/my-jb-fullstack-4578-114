import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidator, signUpValidator } from "../controllers/auth/validator";
import { login, myProfile, signUp } from "../controllers/auth/controller";

const authRouter = Router()

authRouter.post('/login', validation(loginValidator), login)
authRouter.post('/signup', validation(signUpValidator), signUp)
authRouter.get('/:jwt', myProfile)

export default authRouter