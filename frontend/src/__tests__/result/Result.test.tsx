import Result from '../../pages/result/Result'
import thunkMiddleware from 'redux-thunk'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { test } from '@jest/globals'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { personalityReducer } from '../../store/reducers/personalityTest'
import { ApplicationState } from '../../store'
import testData from "../../utils/testData.json"
import '@testing-library/jest-dom'

const getStore = (initialState?: ApplicationState) => {
  const AllReducers = combineReducers({
    personality: personalityReducer
  });
  const middleware = [thunkMiddleware];
  const store = createStore(
    AllReducers,
    initialState ? initialState : undefined,
    applyMiddleware(...middleware)
  );
  return store
}

describe("Test the result page", () => {
  test("display the result screen", async () => {

    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <Result />
        </Provider>
      </BrowserRouter>
    )

    const heading = await screen.findByRole('heading')
    fireEvent.click(heading)

    expect(heading).toBeInTheDocument()
  })

  test("display the result introvert", async () => {

    const initialState: ApplicationState = {
      personality: {
        loading: false,
        questions: testData,
        currentQuestion: 0,
        answers: [
          {
            questionId: 1,
            selectedOption: "A"
          },
          {
            questionId: 2,
            selectedOption: "A"
          },
          {
            questionId: 3,
            selectedOption: "A"
          },
          {
            questionId: 4,
            selectedOption: "A"
          },
          {
            questionId: 5,
            selectedOption: "A"
          }
        ]
      }
    }
    render(
      <BrowserRouter>
        <Provider store={getStore(initialState)}>
          <Result />
        </Provider>
      </BrowserRouter>
    )

    const introvert = await screen.findByText('You are Introvert')
    fireEvent.click(introvert)

    expect(introvert).toBeInTheDocument()
  })

  test("display the result extrovert", async () => {
    const initialState: ApplicationState = {
      personality: {
        loading: false,
        questions: testData,
        currentQuestion: 0,
        answers: [
          {
            questionId: 1,
            selectedOption: "D"
          },
          {
            questionId: 2,
            selectedOption: "D"
          },
          {
            questionId: 3,
            selectedOption: "D"
          },
          {
            questionId: 4,
            selectedOption: "D"
          },
          {
            questionId: 5,
            selectedOption: "D"
          }
        ]
      }
    }
    render(
      <BrowserRouter>
        <Provider store={getStore(initialState)}>
          <Result />
        </Provider>
      </BrowserRouter>
    )

    const introvert = await screen.findByText('You are Extrovert')
    fireEvent.click(introvert)

    expect(introvert).toBeInTheDocument()
  })
})