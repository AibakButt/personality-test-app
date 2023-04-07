import {Container, Navbar} from 'react-bootstrap';
import { LABELS } from '../utils/constants';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand>{LABELS.HEADER_TITLE}</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header;