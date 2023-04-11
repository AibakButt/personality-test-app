import React, { FC, useCallback, useMemo } from "react";
import { ProgressBar } from "react-bootstrap";
import { Question } from "../../store/types/personalityTest";
import QuestionActions from "./QuestionActions";
import QuestionInfo from "./QuestionInfo";
import QuestionOptions from "./QuestionOptions";
import QuestionText from "./QuestionText";
import "./styles.css"

interface QuesitonCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
}

const QuestionCard: FC<QuesitonCardProps> = ({question, currentQuestion, totalQuestions}) => {

  const progress = useMemo(() => {
    return currentQuestion / totalQuestions * 100
  }, [currentQuestion, totalQuestions])

  return (
    <div className="shadow p-4 card-box">
      <ProgressBar striped variant="success" now={progress} />
      <QuestionInfo currentQuestion={currentQuestion} totalQuestions={totalQuestions}/>
      <QuestionText text={question.text}/>
      <QuestionOptions questionId={question.id}  options={question.options}/>
      <QuestionActions />
    </div>
  )
}

export default QuestionCard;