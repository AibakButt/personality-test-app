import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const QuestionInfo: FC = () => {
  const { questions, currentQuestion } = useSelector((state: ApplicationState) => state.personality)

  return (
    <div className="question-info my-2">
      Question {currentQuestion + 1} of {questions.length}:
    </div>
  )
}

export default QuestionInfo;