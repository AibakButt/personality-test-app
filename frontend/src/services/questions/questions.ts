import api_client from "../index";
import { QuestionsEndpoints } from "./constants";

export const get_questions = () => api_client.get(`${QuestionsEndpoints.getQuestions}/`);

const QuestionService = {
    get_questions
}

export default QuestionService;