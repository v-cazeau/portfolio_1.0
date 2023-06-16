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
          <embed src={""} type="application/pdf" width="100%" height="500px" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}