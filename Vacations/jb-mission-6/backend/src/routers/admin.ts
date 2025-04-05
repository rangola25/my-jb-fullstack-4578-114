import { Router } from "express";
import validation from "../middlewares/validation";
import { getVacations } from "../controllers/user/controller";
import { createVacation, deleteVacation, editVacation, getSingleVacation } from "../controllers/admin/controller";
import {  newVacationFilesValidator, newVacationValidatorAdmin, updateVacationFilesValidator, updateVacationValidatorAdmin, validationVacationParamsAdmin } from "../controllers/admin/validator";
import { enforceAuth, enforceRoleAdmin } from "../middlewares/enforce-auth";
import paramsValidation from "../middlewares/params-validation";
import fileUploader from "../middlewares/file-uploader";
import filesValidationEdit from "../middlewares/filesValidationEdit";
import filesValidation from "../middlewares/filesValidation";

const adminRouter = Router()

adminRouter.use(enforceAuth)
adminRouter.use(enforceRoleAdmin)

adminRouter.get('/vacations', getVacations)
adminRouter.get('/edit/:id', paramsValidation(validationVacationParamsAdmin), getSingleVacation)
adminRouter.patch('/edit/:id', paramsValidation(validationVacationParamsAdmin), filesValidationEdit(updateVacationFilesValidator), validation(updateVacationValidatorAdmin), fileUploader, editVacation)
adminRouter.post('/new', validation(newVacationValidatorAdmin), filesValidation(newVacationFilesValidator), fileUploader, createVacation)
adminRouter.delete('/:id', paramsValidation(validationVacationParamsAdmin), deleteVacation)

export default adminRouter