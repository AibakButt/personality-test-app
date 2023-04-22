import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LABELS, URIS } from '../../utils/constants';
import { resetTest } from '../../store/actions/personalityTest';
import { useDispatch } from 'react-redux';

const Landing = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartTest = () => {
    dispatch(resetTest())
    navigate(URIS.TEST)
  }

  return (
    <Container>
      <Title css={"text-center mt-5 title"}>
        {LABELS.LANDING_PAGE_TITLE_TEXT}
      </Title>
      <div className="d-grid gap-2">
        <Button className="button mt-4" onClick={handleStartTest}>
          {LABELS.LANDING_PAGE_START_TEST}
        </Button>
      </div>
    </Container>
  )
}

export default Landing;