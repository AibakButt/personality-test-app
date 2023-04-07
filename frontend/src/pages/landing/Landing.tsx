import { Container, Row, Button } from 'react-bootstrap';
import Title from '../../components/common/Title';
import { LABELS } from '../../utils/constants';

const Landing = () => {
  return (
    <Container>
      <Row>
        <Title css={"text-center mt-5"}>
          {LABELS.LANDING_PAGE_TITLE_TEXT}
        </Title>
        <Button variant="secondary mt-5">
          {LABELS.LANDING_PAGE_START_TEST}
        </Button>
      </Row>
    </Container>
  )
}

export default Landing;