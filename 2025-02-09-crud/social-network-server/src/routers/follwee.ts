import { Router } from "express";
import { getFollowee } from "../controllers/profile/controller";

const followeeRouter = Router()

followeeRouter.get('/', getFollowee)

export default followeeRouter