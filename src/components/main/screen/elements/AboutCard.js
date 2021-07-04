import React from 'react';
import * as ReactElems from 'react-bootstrap';

function AboutCard({ name, imgUrl, aboutCourse }) {
  return (
    <div>
      <ReactElems.Card
        style={{
          width: '16rem',
          margin: '10px 20px',
        }}
      >
        <ReactElems.Card.Img variant="top" src={`${imgUrl}`} style={{ height: '180px' }} />
        <ReactElems.Card.Body>
          <ReactElems.Card.Title>{name}</ReactElems.Card.Title>
          <ReactElems.Card.Text>
            {aboutCourse}
          </ReactElems.Card.Text>
          <ReactElems.Button variant="primary">Batafsil</ReactElems.Button>
        </ReactElems.Card.Body>
      </ReactElems.Card>
    </div>
  )
}

export default AboutCard;
