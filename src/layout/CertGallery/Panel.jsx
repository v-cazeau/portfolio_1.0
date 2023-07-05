import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShareFill } from 'react-bootstrap-icons';

export default function Panel({ item, handleImageClick }) {
  return (
    <Card>
      <Card.Img src={item.image} alt={item.name} onClick={() => handleImageClick(item.image)} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.content}</Card.Text>
        <Button variant="primary" href={item.repo}>
          <ShareFill color="white" size={25} />
        </Button>
      </Card.Body>
    </Card>
  );
}
