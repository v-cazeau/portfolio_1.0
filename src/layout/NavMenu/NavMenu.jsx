import { Nav, Navbar, Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

export default function NavMenu () {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Porfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to= '/' >Home</Nav.Link>
                <Nav.Link as={Link} to= '/about'>About</Nav.Link>
                <Nav.Link as={Link} to= '/contact'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}