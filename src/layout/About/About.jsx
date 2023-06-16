import { Container, Row, Col } from 'react-bootstrap'; 

export default function About () {
    return (
        <section id="about">

        <Container>
        <Row className="text-center">
            <Col sm={12} md={6}>
                <img src= {`../data/assets/profilePic.webp`}
                    className="rounded-circle"
                    alt="Véronie Cazeau" />
            </Col>
            
            <Col className="about">
                <h1 className="mt-3">Véronie Cazeau</h1>
                <h2>About</h2>
               <p> As an enthusiastic and motivated software engineer, I am passionate about Information Technology and continuously seek opportunities for self-learning. My areas of interest span development, UX/UI design, cloud computing, DevSecOps, and project management. With a strong drive to gain more experience in my field, I am actively seeking opportunities to contribute my skills and expertise to innovative projects and collaborate with fellow professionals. </p>
            </Col>
        </Row>
        </Container>
        </section>
    )
}