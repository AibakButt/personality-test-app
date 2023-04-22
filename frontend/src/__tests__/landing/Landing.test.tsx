import Landing from '../../pages/landing/Landing'
import thunkMiddleware from 'redux-thunk'
import { render, screen } from '@testing-library/react'
import { LABELS } from '../../utils/constants'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { personalityReducer } from '../../store/reducers/personalityTest'
import '@testing-library/jest-dom'


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

describe("Test the landing page", () => {
  test('loads and displays landing page', () => {
    render (
      <BrowserRouter>
        <Provider store={getStore()}>
          <Landing />
        </Provider>
      </BrowserRouter>
    )
  
    expect(screen.getByRole('heading')).toHaveTextContent(LABELS.LANDING_PAGE_TITLE_TEXT)
    expect(screen.getByRole('button')).toHaveTextContent(LABELS.LANDING_PAGE_START_TEST)
  })
})