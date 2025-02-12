import { Router } from "express";
import { getFollowers } from "../controllers/profile/controller";

const followersRouter = Router()

followersRouter.get('/', getFollowers)

export default followersRouter