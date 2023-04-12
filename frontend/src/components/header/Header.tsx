import {Container, Navbar} from 'react-bootstrap';
import { LABELS } from '../../utils/constants';
import './styles.css'

const Header = () => {
  return (
    <Navbar className="navbar d" variant="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand className="text-center">{LABELS.HEADER_TITLE}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;