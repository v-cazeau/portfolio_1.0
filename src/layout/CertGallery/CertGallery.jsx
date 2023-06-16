import CertCard from "../../components/CertCard";
import { Row, Col } from "react-bootstrap";

import bc from "../../data/assets/certs/bcCert.webp";
import aiCert from "../../data/assets/certs/aiCert.webp";
import brandCert from "../../data/assets/certs/brandCert.webp";
import figmaCert from "../../data/assets/certs/figmaCert.webp";
import genAiCert from "../../data/assets/certs/genAiCert.webp";
import planWebsiteCert from "../../data/assets/certs/planWebsiteCert.webp";
import promptEngineeringCert from "../../data/assets/certs/promptEngineeringCert.webp";
import reactEssCert from "../../data/assets/certs/reactEssCert.webp";
import reactHookCert from "../../data/assets/certs/reactHookCert.webp";
import tsEssCert from "../../data/assets/certs/tsEssCert.webp";

const certificates = [
  {
    name: "Software Engineering Career Course",
    img: bc,
    issued: "Boca Code School",
    date: "May 2023",
  },
  {
    name: "Artificial Intelligence Foundations",
    img: aiCert,
    issued: "LinkedIn Learning",
    date: "Mar 2023",
  },
  {
    name: "Create a Brand Strategy",
    img: brandCert,
    issued: "LinkedIn Learning",
    date: "May 2023",
  },
  {
    name: "Figma Essential Training",
    img: figmaCert,
    issued: "LinkedIn Learning",
    date: "May 2023",
  },
  {
    name: "Get Ready for Generative AI",
    img: genAiCert,
    issued: "LinkedIn Learning",
    date: "Apr 2023",
  },
  {
    name: "How to Plan Your Website",
    img: planWebsiteCert,
    issued: "LinkedIn Learning",
    date: "Jun 2023",
  },
  {
    name: "Prompt Engineering: How to Talk to the AIs",
    img: promptEngineeringCert,
    issued: "LinkedIn Learning",
    date: "Jun 2023",
  },
  {
    name: "React.js Essential Training",
    img: reactEssCert,
    issued: "LinkedIn Learning",
    date: "May 2023",
  },
  {
    name: "React Hooks",
    img: reactHookCert,
    issued: "LinkedIn Learning",
    date: "Apr 2023",
  },
  {
    name: "TypeScript Essential Training",
    img: tsEssCert,
    issued: "LinkedIn Learning",
    date: "May 2023",
  },
];

export default function Certs() {
  return (
    <section id="certs">
    <div id="certs" className="mt-4 text-white" style={{ paddingBottom: "50px" }}>
      <h1 className="text-4xl font-bold flex items-center sm:justify-center">Certificates</h1>
      <p className="font-light text-gray-400 sm:text-center text-left">
        Here are some of my Certificates I've earned
      </p>

      <Row className="justify-content-center mt-4 gap-5 card-wrapper">
        {certificates.map((certificate, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="card">
            <CertCard
              name={certificate.name}
              img={certificate.img}
              issued={certificate.issued}
              date={certificate.date}
            />
          </Col>
        ))}
      </Row>
    </div>
    </section>
  );
}
