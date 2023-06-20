import { Container, Row, Col } from "react-bootstrap";
import skills from "../../data/json/skills.json";
import Panel from "./Panel";


export default function SkillGrid() {
  return (
    <Container id="skills">
      <Row>
        <Col className= "text-center">
          <h2>Skills</h2>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
            {skills.map((skill) => (
          <Col key={skill.id} className="text-center" sm={6} md={4} lg={3} xl={2}>

            <Panel 
              // key={skill.id}
              skill={skill}
              // svg= {skill.svg}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
