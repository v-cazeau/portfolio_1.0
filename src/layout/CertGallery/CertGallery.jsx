import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import data from '../../data/json/certs.json';

export default function CertificateCarousel() {
  return (
    <section id="certs">
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <Carousel className="carousel-dark">
            {data.map((item) => (
              <Carousel.Item key={item.id}>
                <div className="card-wrapper">
                  <Card>
                    <Card.Img src={item.image} alt={item.name} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.issued}</Card.Text>
                      <Card.Text>{item.date}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
    </section>
  );
}
