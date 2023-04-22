import * as TYPES from "../types/personalityTest";

const initialState: TYPES.PersonalityTestState = {
  loading: false,
  questions: [],
  currentQuestion: 0,
  answers: []
};

export const personalityReducer = (state = initialState, action: TYPES.ActionType) => {
  switch (action.type) {

    case TYPES.SET_LOADING:
      return {...state, loading: action.payload }

    case TYPES.FETCH_QUESTIONS: 
      return {...state, questions: action.payload}
    
    case TYPES.PREV_QUESTION: 
      let _currentQuestionPrev = state.currentQuestion
      if(_currentQuestionPrev > 0)
        return {...state, currentQuestion: _currentQuestionPrev - 1}
      return state;

    case TYPES.NEXT_QUESTION: 
      let _currentQuestionNext = state.currentQuestion
      if(_currentQuestionNext < state.questions.length - 1)
        return {...state, currentQuestion: _currentQuestionNext + 1}
      return state;
    
    case TYPES.SET_ANSWER: 
      let _answers = JSON.parse(JSON.stringify(state.answers))
      let index = _answers.findIndex((answer: TYPES.Answer) => answer.questionId === action.payload.questionId)
      if(index > -1) {
        _answers[index] = action.payload
      } else {
        _answers.push(action.payload)
      }
      return { ...state, answers: _answers }
    
    case TYPES.RESET_TEST:
      return { ...state, answers: [], currentQuestion: 0}
    
    default:
      return state;
  }
};