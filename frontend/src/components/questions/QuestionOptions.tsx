import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../../store/actions/personalityTest';
import { QuestionOption } from '../../store/types/personalityTest';

interface QuesitonOptionsProps {
  questionId: string;
  options: QuestionOption[]
}

const QuestionOptions: FC<QuesitonOptionsProps> = ({ questionId, options }) => {

  const dispatch = useDispatch()

  const handleAnswerUpdate = (questionId: string, selectedOption: string) => {
    let payload = { questionId, selectedOption }
    dispatch(setAnswer(payload))
  }

  return (
    <div>
      {
        options.map((option: QuestionOption) => (
          <div onClick={() => handleAnswerUpdate(questionId, option.value)}>
            <Form.Check
              className="my-2"
              type={'radio'}
              label={option.content}
              name="option-group"
            />
          </div>
        ))
      }
    </div>
  )
}

export default QuestionOptions;