import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>Résumé</Button>

      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Résumé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed src="https://github.com/v-cazeau/portfolio_1.0/blob/main/src/data/2023FSDResume.jpg" type="application/pdf" width="100%" height="500px" />
          <p>Click the link below to download the résumé:</p>
          <a href="https://github.com/v-cazeau/portfolio_1.0/raw/main/src/data/2023FSDResume.pdf" download>
            Download Résumé
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
