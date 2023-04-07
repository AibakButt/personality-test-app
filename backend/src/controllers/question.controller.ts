import { Request, Response } from "express";

import QuestionService from "../services/question.service";

const getAllQuestions = async (req: Request, res: Response) => {
  const questions = await QuestionService.findAll();
  
  if (questions.length === 0)
    return res.status(404).json({ message: `No questions found` });

  res.status(200).json({ questions });
};

export default {
  getAllQuestions
}
