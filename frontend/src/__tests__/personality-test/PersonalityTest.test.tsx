import PersonalityTest from '../../pages/personality-test/PersonalityTest'
import QuestionService from '../../services/questions/questions'
import thunkMiddleware from 'redux-thunk'
import { fireEvent, render, screen } from '@testing-library/react'
import { LABELS } from '../../utils/constants'
import { BrowserRouter } from 'react-router-dom'
import { jest, test } from '@jest/globals'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { personalityReducer } from '../../store/reducers/personalityTest'
import testData from "../../utils/testData.json"
import store from '../../store'
import '@testing-library/jest-dom'


beforeEach(async () => {
  let data: any = {
    data: {
      questions: testData
    }
  }
  jest.spyOn(QuestionService, "get_questions").mockImplementation(() => Promise.resolve(data))

})

const getStore = () => {
  const AllReducers = combineReducers({
    personality: personalityReducer
  });
  const middleware = [thunkMiddleware];
  const store = createStore(
    AllReducers,
    applyMiddleware(...middleware)
  );

  return store
}
describe("Test the personality test page", () => {

  test('displays no question text if questions length is zero', async () => {
    jest.spyOn(QuestionService, "get_questions").mockImplementation(() => Promise.reject())

    render(
      <BrowserRouter>
        <Provider store={store}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )
    const NoQuestionText = await screen.findByRole('heading')
    expect(NoQuestionText).toHaveTextContent(LABELS.NO_QUESTION_TEXT)
  })

  test('displays question card and renders the question Info', async () => {

    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const QuestionInfo = await screen.findByText('Question 1 of 5:')
    expect(QuestionInfo).toBeInTheDocument()
  })

  test('displays question card and renders the question text', async () => {

    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const QuestionText = await screen.findByText('It’s time for your annual appraisal with your boss. You:')
    expect(QuestionText).toBeInTheDocument()
  })

  test('displays question card and renders the question options', async () => {

    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const Option1 = await screen.findByText('Go with great hesitation as these sessions are torture for you')
    const Option2 = await screen.findByText('Look forward to hearing what your boss thinks about you and expects from you')
    const Option3 = await screen.findByText('Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting')
    const Option4 = await screen.findByText('Go along unprepared as you are confident and like improvising')

    expect(Option1).toBeInTheDocument()
    expect(Option2).toBeInTheDocument()
    expect(Option3).toBeInTheDocument()
    expect(Option4).toBeInTheDocument()

  })

  test('displays question card and renders the next and previous buttons', async () => {

    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const NextButton = await screen.findByText('Next')
    const PrevButton = await screen.findByText('Previous')

    expect(NextButton).toBeInTheDocument()
    expect(PrevButton).toBeInTheDocument()

  })

  test('click on next button renders the next question', async () => {
    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const nextButton = await screen.findByText('Next')
    fireEvent.click(nextButton)

    const QuestionInfo = await screen.findByText('Question 2 of 5:')
    const QuestionText = await screen.findByText('You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:')
    const Option1 = await screen.findByText('Look at your watch every two minutes')
    const Option2 = await screen.findByText('Bubble with inner anger, but keep quiet')
    const Option3 = await screen.findByText('Explain to other equally impatient people in the room that the doctor is always running late')
    const Option4 = await screen.findByText('Complain in a loud voice, while tapping your foot impatiently')

    expect(QuestionInfo).toBeInTheDocument()
    expect(QuestionText).toBeInTheDocument()
    expect(Option1).toBeInTheDocument()
    expect(Option2).toBeInTheDocument()
    expect(Option3).toBeInTheDocument()
    expect(Option4).toBeInTheDocument()
  })

  test('click on previous button renders the previous question', async () => {
    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const nextButton = await screen.findByText('Next')
    const prevButton = await screen.findByText('Previous')
    fireEvent.click(nextButton) // question 2
    fireEvent.click(nextButton) // question 3
    fireEvent.click(prevButton) // question 2

    const QuestionInfo = await screen.findByText('Question 2 of 5:')
    const QuestionText = await screen.findByText('You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:')
    const Option1 = await screen.findByText('Look at your watch every two minutes')
    const Option2 = await screen.findByText('Bubble with inner anger, but keep quiet')
    const Option3 = await screen.findByText('Explain to other equally impatient people in the room that the doctor is always running late')
    const Option4 = await screen.findByText('Complain in a loud voice, while tapping your foot impatiently')

    expect(QuestionInfo).toBeInTheDocument()
    expect(QuestionText).toBeInTheDocument()
    expect(Option1).toBeInTheDocument()
    expect(Option2).toBeInTheDocument()
    expect(Option3).toBeInTheDocument()
    expect(Option4).toBeInTheDocument()
  })

  test("select on any option should checked it", async () => {
    render(
      <BrowserRouter>
        <Provider store={getStore()}>
          <PersonalityTest />
        </Provider>
      </BrowserRouter>
    )

    const options = await screen.findAllByRole('radio') as HTMLInputElement[]
    fireEvent.click(options[0])

    expect(options[0].checked).toBe(true);
  })
})