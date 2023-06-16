import { Container, Row, Col } from 'react-bootstrap'; 
import Typewriter from '../../components/TypewriterAboutMes'

export default function Intro() {
    return (
        <Container> 
            <Row>
                <Col sm={12} md={6}>
                    <h2>Hello, my name is</h2>
                    <h1>Véronie Cazeau</h1>
                    <Typewriter />
                    <p>Welcome to my portfolio website— a growth profile showcasing my journey from school to an internship and the projects I have completed along the way. 
                    </p>
                </Col>
            </Row>
        </Container>
    )
}