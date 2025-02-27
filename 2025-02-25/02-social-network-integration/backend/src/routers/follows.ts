import { Router } from "express";
import { follow, getFollowee, getFollowers, unfollow } from "../controllers/follows/controller";
import paramsValidation from "../middlewares/params-validation";
import { followValidator, unfollowValidator } from "../controllers/follows/validator";

const followsRouter = Router()

followsRouter.get('/followers', getFollowers)
followsRouter.get('/following', getFollowee)
followsRouter.post('/follow/:id', paramsValidation(followValidator), follow)
followsRouter.post('/unfollow/:id',paramsValidation(unfollowValidator), unfollow)

export default followsRouter