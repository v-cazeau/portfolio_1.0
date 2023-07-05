import { Carousel, Card, Modal } from 'react-bootstrap';
import data from '../../data/json/certs.json';
import { useState } from 'react';

export default function CertificateCarousel() {
  const [modalInfo, setModalInfo] = useState({ show: false, image: '' });

  const handleImageClick = (image) => {
    setModalInfo({ show: true, image });
  };

  const handleCloseModal = () => {
    setModalInfo({ show: false, image: '' });
  };

  const itemsPerSlide = 5;

  const chunks = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    chunks.push(data.slice(i, i + itemsPerSlide));
  }

  return (
    <>
      <Carousel interval={null}>
        {chunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex">
              {chunk.map((item) => (
                <Card key={item.id} className="mx-2">
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
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={modalInfo.show} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalInfo.image} alt="Certificate" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </>
  );
}
