import { Container, Row, Col } from "react-bootstrap";
import skills from "../../data/json/skills.json";

export default function SkillGrid() {
  return (
    <Container>
      <Row>
        {skills.map((skill) => (
          <Col key={skill.id} md={8} className="text-center">
            <a href={skill.webpage} target="_blank" rel="noopener noreferrer">
              <img
                src={`/icons/${skill.skill}.svg`}
                alt={skill.skill}
                style={{ width: "100px" }}
              />
            </a>
            <h3>{skill.skill}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
