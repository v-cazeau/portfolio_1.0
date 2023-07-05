import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShareFill } from 'react-bootstrap-icons';

export default function Panel({ item }) {
  return (
    <Card className="collection-panel card-wrapper" key={item.id}>
      <Card.Img src={item.image} alt={item.name} />
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
