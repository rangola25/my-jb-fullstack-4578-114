import { Router } from "express";
import { getAll } from "../controllers/types/controller";


const typesRouter = Router()

typesRouter.get('/', getAll)

export default typesRouter