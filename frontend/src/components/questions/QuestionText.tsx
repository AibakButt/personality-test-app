import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { Question } from '../../store/types/personalityTest';

const QuestionText: FC = () => {
  const { questions, currentQuestion } = useSelector((state: ApplicationState) => state.personality)
  let activeQuestion: Question = questions[currentQuestion]

  return (
    <div className='question-text bold'>
      {activeQuestion.text}
    </div>
  )
}

export default QuestionText;