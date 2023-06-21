import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import data from '../../data/json/certs.json';

export default function CertificateGrid() {
  const [modalInfo, setModalInfo] = useState({ show: false, image: '' });

  const handleImageClick = (image) => {
    setModalInfo({ show: true, image });
  };

  const handleCloseModal = () => {
    setModalInfo({ show: false, image: '' });
  };

  return (
    <section id="certs">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Certifications</h2>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
          {data.map((item) => (
            <Col key={item.id} sm={12} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  src={item.image}
                  alt={item.name}
                  onClick={() => handleImageClick(item.image)}
                  style={{ cursor: 'pointer' }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.issued}</Card.Text>
                  <Card.Text>{item.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={modalInfo.show} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalInfo.image} alt="Certificate" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </section>
  );
}
