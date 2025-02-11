import { Router } from "express";
import { follow } from "../controllers/profile/controller";

const followRouter = Router()

followRouter.post('/:id', follow)

export default followRouter