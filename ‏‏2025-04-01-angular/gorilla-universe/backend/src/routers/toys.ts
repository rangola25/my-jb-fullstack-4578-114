import { Router } from "express";
import { create, deleteToy, getAllByPrice, getAllToys } from "../controllers/toys/controller";
import validation from "../middlewares/validation";
import { newToyValidator } from "../controllers/toys/validator";

const toysRouter = Router()

toysRouter.get('/', getAllToys)
toysRouter.get('/:price', getAllByPrice)
toysRouter.post('/create', validation(newToyValidator), create)
toysRouter.delete('/:id', deleteToy)

export default toysRouter