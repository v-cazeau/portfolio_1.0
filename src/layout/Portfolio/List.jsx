import React from 'react';
import { Col } from 'react-bootstrap';
import Panel from './Panel';
import data from '../../data/json/bc_gallery.json';

export default function List() {
  return (
    <div className="collection-container">
        {data.map((item) => {
          return (
          <Col key={item.id} sm={12} md={4} lg={3}>
            <Panel item={item} />
          </Col>
           );
          })
        }
    </div>
  );
}
