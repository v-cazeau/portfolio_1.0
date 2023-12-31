import { Container, Row, Col } from 'react-bootstrap'; 

export default function Footer() {

    const currentYear = new Date().getFullYear(); 
    const url = ''

    return (
        <footer> 
            <Container> 
                <Row>
                     <Col className="text-center"> 
                     <div> 
                        <a href = {url} 
                        target ="_blank"
                        rel = "noreferrer"
                        className="button-effect"
                        >Code in GitHub</a>
                            <p> &copy;{currentYear} Véronie Cazeau</p>
                        </div>
                     </Col>
                </Row>
            </Container>
        </footer>
    )
}