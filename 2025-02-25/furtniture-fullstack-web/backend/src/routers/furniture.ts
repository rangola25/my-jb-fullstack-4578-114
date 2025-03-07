import { Router } from "express";
import { createFurniture, getFurniture } from "../controllers/furniture/controller";
import validation from "../middlewares/validation";
import { createFurnitureValidator } from "../controllers/furniture/validator";

const router = Router()

router.get('/',  getFurniture)
router.post('/new', validation(createFurnitureValidator), createFurniture)

export default router