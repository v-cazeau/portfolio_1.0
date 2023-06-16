import { Container, Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import Resume from "../../components/Resume"

export default function NavMenu() {
  
    return (
        <>
        <Navbar bg="light" expand="lg" className="sticky-top">
        <Container>
            <Navbar.Brand href="#home"> Portfolio </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" drop="up">
            <Nav className="ms-auto">
                <Nav.Link as={ HashLink } to="#about">About</Nav.Link>
                <Nav.Link as={ HashLink } to="#portfolio">Portfolio</Nav.Link>
                <Nav.Link as={ HashLink } to="#skills">Skills</Nav.Link>
                <Nav.Link as={ HashLink } to="#certs">Certifications</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Resume />
        </Navbar>
        </>
    
  );
}