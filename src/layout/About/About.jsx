import { Container, Row, Col, Button } from 'react-bootstrap'; 
import {  Send, Linkedin, PersonCircle } from 'react-bootstrap-icons'

export default function About ({ linkedInUrl, gitHubUrl, candidateUrl }) {
    return (
        <section id="about">

        <Container>
        <Row> 
            <Col className= "text-center g-5">
                <h2>About</h2>
            </Col>
        </Row>
        <Row className="text-center">
            <Col sm={12} md={6}>
                <img src= {`https://raw.githubusercontent.com/v-cazeau/portfolio_1.0/main/src/data/assets/profilePic.webp`}
                    className="rounded-circle"
                    alt="Véronie Cazeau" />
            </Col>
            
            <Col className="about">
                <h1 className="mt-3">Véronie Cazeau</h1>
                <p> As an enthusiastic and motivated software engineer, I am passionate about Information Technology and continuously seek opportunities for self-learning. My areas of interest span development, UX/UI design, cloud computing, DevSecOps, and project management. With a strong drive to gain more experience in my field, I am actively seeking opportunities to contribute my skills and expertise to innovative projects and collaborate with fellow professionals. </p>
                    
                    <a href={gitHubUrl} target='_blank' rel="noreferrer"><Button
                    variant="info" className="me-2"><Send color="white" size={25} /></Button></a>

                    <a href={linkedInUrl} target='_blank' rel="noreferrer"><Button
                    variant="info" className="me-2"><Linkedin color="white" size={25} /></Button></a>

                    <a href={candidateUrl} target='_blank' rel="noreferrer"><Button
                    variant="info" className="me-2"><PersonCircle color="white" size={25} /></Button></a>
            </Col>
        </Row>
        </Container>
        </section>
    )
}