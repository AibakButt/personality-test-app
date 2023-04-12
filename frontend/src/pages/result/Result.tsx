import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { URIS } from '../../utils/constants';
import './styles.css';
import { Question } from '../../store/types/personalityTest';

const Result = () => {
  const { questions, answers } = useSelector((state: ApplicationState) => state.personality )
  const navigate = useNavigate()

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

  return (
    <Container>
        <div className="result-card d-flex flex-column align-items-center shadow ">
          <Title css="mt-4">Your Result</Title>
          <div className="result-text">You are {calculatePersonality()}</div>
        </div>
        <div className="d-grid gap-2">
          <Button className="button" onClick={() => navigate(URIS.LADNDING)}>Retake Test</Button>
        </div>
    </Container>
  )
}

export default Result;