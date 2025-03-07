import { Router } from "express";
// import validation from "../middlewares/validation";
// import { newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
// import { createComment } from "../controllers/comments/controller";
// import paramsValidation from "../middlewares/params-validation";
import { getAllPresents, getAudiencePresents } from "../controllers/audiencePresents/controller";

const audiencePresentsRouter = Router()

// targetAudienceRouter.use(enforceAuth)

audiencePresentsRouter.get('/', getAllPresents)
audiencePresentsRouter.get('/:type', getAudiencePresents)
export default audiencePresentsRouter