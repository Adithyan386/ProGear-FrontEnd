import React from 'react'
import { Card } from 'react-bootstrap'

function Feedback() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Feedback</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className='btn btn-outline-info'>View</button>
      </Card.Body>
    </Card>

    </>
  )
}

export default Feedback