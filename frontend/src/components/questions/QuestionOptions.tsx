import { FC } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { setAnswer } from '../../store/actions/personalityTest';
import { QuestionOption } from '../../store/types/personalityTest';

const QuestionOptions: FC = () => {

  const { questions, currentQuestion, answers } = useSelector((state: ApplicationState) => state.personality)
  const dispatch = useDispatch()

  let question = questions[currentQuestion]

  const handleAnswerUpdate = (questionId: string, selectedOption: string) => {
    let payload = { questionId, selectedOption }
    dispatch(setAnswer(payload))
  }

  const isSelected = (option: QuestionOption, currentQuestion: number) => {
    let index = answers.findIndex(answer => answer.questionId === questions[currentQuestion].id)
    return answers[index]?.selectedOption === option.value
  }

  return (
    <div>
      {
        question.options.map((option: QuestionOption) => (
          <div key={option.content} onClick={() => handleAnswerUpdate(question.id, option.value)}>
            <Form.Check
              checked={isSelected(option, currentQuestion)}
              className="my-2"
              type={'radio'}
              label={option.content}
              name="option-group"
              onChange={() => handleAnswerUpdate(question.id, option.value)}
            />
          </div>
        ))
      }
    </div>
  )
}

export default QuestionOptions;