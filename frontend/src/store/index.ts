import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { personalityReducer } from "./reducers/personalityTest";
import { PersonalityTestState } from "./types/personalityTest";

const middleware = [thunkMiddleware];
export interface ApplicationState {
  personality: PersonalityTestState;
}

const AllReducers = combineReducers({
    personality: personalityReducer
});

const store = createStore(
  AllReducers,
  applyMiddleware(...middleware)
);

export default store;