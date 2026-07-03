import express from "express";

import {
  submitFeedback,
  fetchFeedback,
} from "../controllers/feedback.controller.js";

import { validate } from "../middlewares/validate.middleware.js";
import { feedbackSchema } from "../validators/feedback.validator.js";

const router = express.Router();

router.post("/", validate(feedbackSchema), submitFeedback);

router.get("/", fetchFeedback);

export default router;