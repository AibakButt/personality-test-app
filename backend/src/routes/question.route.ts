import { Router } from "express";
import QuestionController from "../controllers/question.controller";
import { handleError } from "../middlewares/handleError";

const router = Router();

router.get("/", handleError(QuestionController.getAllQuestions)); 

export default router;