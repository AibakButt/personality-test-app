export interface QuestionOption {
  content: string;
  extrovertPoint: number;
  introvertPoint: number;
  value: string;
}
export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}
export interface Answer {
  questionId: number;
  selectedOption: string;
}
export interface PersonalityTestState {
  readonly questions: Question[];
  readonly currentQuestion: number;
  readonly loading: boolean;
  readonly answers: Answer[];
}
export interface ActionType {
  type: string;
  payload?: any;
}

export const NEXT_QUESTION = "NEXT_QUESTION"
export const PREV_QUESTION = "PREV_QUESTION"
export const RESET_TEST = "RESET_TEST"
export const SET_LOADING = "SET_LOADING"
export const SET_ANSWER = "SET_ANSWER"
export const FETCH_QUESTIONS = "FETCH_QUESTIONS"
