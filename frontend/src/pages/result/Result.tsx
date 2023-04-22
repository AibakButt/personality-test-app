import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { URIS } from '../../utils/constants';
import { Question } from '../../store/types/personalityTest';
import { resetTest } from '../../store/actions/personalityTest'
import './styles.css';

const Result = () => {
  const { questions, answers } = useSelector((state: ApplicationState) => state.personality )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function calculatePersonality() {
    let introvert = 0;
    let extrovert = 0;
  
    for (let i = 0; i < answers.length; i++) {
      let answer = answers[i];
      let question: Question | undefined = questions.find(q => q.id === answer.questionId);
      let option = question && question.options.find(o => o.value === answer.selectedOption);
      if(option){
        introvert += option.introvertPoint;
        extrovert += option.extrovertPoint;
      }
    }

    return introvert > extrovert ? "Introvert" : "Extrovert";
  }

  const handleRetakeTest = () => {
    dispatch(resetTest())
    navigate(URIS.LADNDING)
  }

  return (
    <Container>
        <div className="result-card d-flex flex-column align-items-center shadow ">
          <Title css="mt-4">Your Result</Title>
          <div className="result-text">You are {calculatePersonality()}</div>
        </div>
        <div className="d-grid gap-2">
          <Button className="button" onClick={handleRetakeTest}>Retake Test</Button>
        </div>
    </Container>
  )
}

export default Result;