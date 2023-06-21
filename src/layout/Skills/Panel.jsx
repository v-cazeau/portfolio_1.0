import { Image } from "react-bootstrap";

export default function Panel({ skill }) {
  return (
    <div className="panel">
      <Image
        src={`/icons/${skill.svg}.svg`}
        alt={skill.skill}
        className="skills-icons"
        style={{ display: "inline-block", width: "100px" }}
      />
      <h3>{skill.skill}</h3>
    </div>
  );
}

