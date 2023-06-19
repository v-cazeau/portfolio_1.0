import { Container, Row, Col } from "react-bootstrap";
import skills from "../../data/json/skills.json";
import Panel from "./Panel";

export default function SkillGrid() {
  return (
    <Container id="skills ">
      <Row>
        {skills.map((skill) => (
          <Col key={skill.id} md={8} className="text-center">
            <Panel 
              key={skill.id}
              skill={skill.skill}
              svg= {skill.svg}
            />
            <h3>{skill.skill}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
