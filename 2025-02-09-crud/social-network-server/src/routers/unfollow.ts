import { Router } from "express";
import { unfollow } from "../controllers/profile/controller";

const unfollowRouter = Router()

unfollowRouter.delete('/:id', unfollow)

export default unfollowRouter