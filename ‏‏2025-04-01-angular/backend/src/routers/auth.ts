import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidator, signUpValidator } from "../controllers/auth/validator";
import { login, signup } from "../controllers/auth/controller";

const authRouter = Router()

authRouter.post('/login', validation(loginValidator), login)
authRouter.post('/signup', validation(signUpValidator), signup)
// authRouter.get('/:jwt', myProfile)

export default authRouter