import { Router } from "express";
import validation from "../middlewares/validation";
import { getAllFollows, getLikesOfTheVacations, likeVacation, unlikeVacation } from "../controllers/follow/controller";
import { followValidatorParams, followValidatorReq, unfollowValidatorParams, unfollowValidatorReq } from "../controllers/follow/validator";
import { loginValidator } from "../controllers/auth/validator";
import paramsValidation from "../middlewares/params-validation";
import { enforceAuth } from "../middlewares/enforce-auth";

const followRouter = Router()

followRouter.use(enforceAuth)

followRouter.get('/', getLikesOfTheVacations)
followRouter.get('/allFollows', getAllFollows)
followRouter.post('/like/:vacationId', validation(followValidatorReq), paramsValidation(followValidatorParams), likeVacation)
followRouter.post('/unlike/:vacationId', validation(unfollowValidatorReq), paramsValidation(unfollowValidatorParams), unlikeVacation)

export default followRouter