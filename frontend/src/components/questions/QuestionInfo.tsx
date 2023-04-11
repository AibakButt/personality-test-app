import React, { FC } from 'react';

interface QuesitonInfoProps {
  currentQuestion: number
  totalQuestions: number
}

const QuestionInfo: FC<QuesitonInfoProps> = ({ currentQuestion, totalQuestions }) => {
  return (<div className="question-info my-2">Question {currentQuestion + 1} of {totalQuestions}:</div>)
}

export default QuestionInfo;