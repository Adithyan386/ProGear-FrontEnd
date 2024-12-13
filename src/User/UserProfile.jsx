import React from 'react'
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import './profile.css'
import Useredit from './Useredit'

function UserProfile() {
  return (
    <>
    <Container className="py-5">
      <h1 className="text-center mb-4">My Profile</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Img
              variant="top"
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fXLskRpmbWQhJrPXoDFTbXoFxyl6T9YGd7l90EVhHma6izSLcTfLhVG4zpaAm4TEMcU&usqp=CAU"}
              alt="User Profile"
              className="img-fluid rounded-circle p-3" style={{width:'150px', margin:'auto'}}
            />
            <h6 className='text-center'>Adithyan V</h6> 
            <Card.Body>
              <Card.Title className="text-center">{}</Card.Title>
              <Card.Text className="text-muted text-center">{}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <strong>Name:</strong> {"Not Available"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Phone:</strong> {"Not Available"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Address:</strong> { "Not Available"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Gender:</strong> { "Not Specified"}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body className="text-center">
            <Useredit/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default UserProfile