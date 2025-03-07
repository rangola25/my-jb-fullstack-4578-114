import { Router } from "express";
import { remove } from "../controllers/deletePresent/controller";

const deletePresentRouter = Router()

deletePresentRouter.delete('/:code', remove)
export default deletePresentRouter