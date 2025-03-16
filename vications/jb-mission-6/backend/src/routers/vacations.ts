import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidator } from "../controllers/auth/validator";
import { getVacations } from "../controllers/user/controller";
import { enforceAuth } from "../middlewares/enforce-auth";

const userRouter = Router()

userRouter.use(enforceAuth)

userRouter.get('/', getVacations)

export default userRouter