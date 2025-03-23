import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidatorAdmin } from "../controllers/auth/validator";
import { getVacations } from "../controllers/user/controller";
import { createVacation, deleteVacation, editVacation, getSingleVacation } from "../controllers/admin/controller";
import {  newVacationFilesValidator, newVacationValidatorAdmin, updateVacationValidatorAdmin, validationVacationParamsAdmin } from "../controllers/admin/validator";
import { enforceAuth, enforceRoleAdmin } from "../middlewares/enforce-auth";
import paramsValidation from "../middlewares/params-validation";
import fileUploader from "../middlewares/file-uploader";
import filesValidation from "../middlewares/filesValidation";
// import { isAdmin } from "../middlewares/isAdmin"

const adminRouter = Router()

adminRouter.use(enforceAuth)
adminRouter.use(enforceRoleAdmin)

adminRouter.get('/vacations', getVacations)
adminRouter.get('/edit/:id', paramsValidation(validationVacationParamsAdmin), getSingleVacation)
adminRouter.patch('/edit/:id', paramsValidation(validationVacationParamsAdmin), filesValidation(newVacationFilesValidator), validation(updateVacationValidatorAdmin), fileUploader, editVacation)
adminRouter.post('/new', validation(newVacationValidatorAdmin), createVacation)
adminRouter.delete('/:id', paramsValidation(validationVacationParamsAdmin), deleteVacation)

export default adminRouter