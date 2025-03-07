import { Router } from "express";
import { getTargetAudience } from "../controllers/targetAudience/controller";

const targetAudienceRouter = Router()

targetAudienceRouter.get('/', getTargetAudience)
export default targetAudienceRouter