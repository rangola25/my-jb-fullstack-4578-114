import { Router } from "express";
import { addNewPresent } from "../controllers/newPresent/controller";

const newPresentRouter = Router()

newPresentRouter.post('/', addNewPresent)
export default newPresentRouter