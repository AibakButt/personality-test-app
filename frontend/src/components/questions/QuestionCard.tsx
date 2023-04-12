import QuestionActions from "./QuestionActions";
import QuestionInfo from "./QuestionInfo";
import QuestionOptions from "./QuestionOptions";
import QuestionText from "./QuestionText";
import { FC, useMemo } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import "./styles.css"

const QuestionCard: FC = () => {

  const { questions, answers } = useSelector((state: ApplicationState) => state.personality)
  let totalQuestions = questions.length

  const progress = useMemo(() => {
    return answers.length / totalQuestions * 100
  }, [answers, totalQuestions])

  return (
    <div className="shadow p-4 card-box">
      <ProgressBar striped variant="success" now={progress} />
      <QuestionInfo />
      <QuestionText />
      <QuestionOptions />
      <QuestionActions />
    </div>
  )
}

export default QuestionCard;