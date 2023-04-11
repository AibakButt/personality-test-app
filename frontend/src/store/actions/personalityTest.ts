import * as TYPES from "../types/personalityTest";

export const nextQuesiton = () => ({
  type: TYPES.NEXT_QUESTION,
})

export const prevQuesiton = () => ({
  type: TYPES.PREV_QUESTION,
})

export const setAnswer = (answer: TYPES.Answer) => ({
  type: TYPES.SET_ANSWER, 
  payload: answer
})

export const submitTest = () => ({
  type: TYPES.SUBMIT_TEST,
})

export const apiFetchQuestions = (questions: TYPES.Question[]) => ({
  type: TYPES.FETCH_QUESTIONS,
  payload: questions
})

export const updateLoading = (value: boolean) => ({
  type: TYPES.SET_LOADING,
  payload: value
})