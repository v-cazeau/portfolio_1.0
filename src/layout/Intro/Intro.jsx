import { Container, Row, Col } from 'react-bootstrap'; 
import Typewriter from '../../components/TypewriterAboutMes'

export default function Intro() {
    return (
        <Container> 
            <Row>
                <Col>
                    <h2>Hello, my name is</h2>
                    <h1>Veronie Cazeau</h1>
                    <Typewriter />
                    <p>Welcome to my portfolio website— a growth profile showcasing my journey from school to an internship and the projects I have completed along the way. As an enthusiastic and motivated software engineer, I am passionate about Information Technology and continuously seek opportunities for self-learning. My areas of interest span development, UX/UI design, cloud computing, DevSecOps, and project management. With a strong drive to gain more experience in my field, I am actively seeking opportunities to contribute my skills and expertise to innovative projects and collaborate with fellow professionals.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}