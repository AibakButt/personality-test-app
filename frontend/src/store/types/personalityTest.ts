export interface QuestionOption {
  content: string;
  extrovertPoint: number;
  introvertPoint: number;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export interface Answer {
  questionId: string;
  selectedOption: string;
}

export const NEXT_QUESTION = "NEXT_QUESTION"
export const PREV_QUESTION = "PREV_QUESTION"
export const SUBMIT_TEST = "SUBMIT_TEST"
export const SET_LOADING = "SET_LOADING"
export const SET_ANSWER = "SET_ANSWER"
export const FETCH_QUESTIONS = "FETCH_QUESTIONS"

export interface PersonalityTestState {
  readonly questions: Question[];
  readonly currentQuestion: number;
  readonly loading: boolean;
  readonly answers: Answer[];
}