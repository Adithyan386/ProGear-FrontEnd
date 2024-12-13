import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import key from '../Assets/keyB.jpg'
import './card.css'

function Cart() {
  return (
    <>
      <div className='container'>
        <Container/>
        <Row>
          <Col>
          <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Ordered Products</th>
              <th>Image</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Gaming Keyboard</td>
              <td><img src={key} alt="Image" style={{height:'50px', width:'100px'}} /></td>
              <td>1999</td>
              <td><button className='btn btn-dark'><i class="fa-solid fa-trash"></i></button></td>
            </tr>
          </tbody>
        </Table>
          </Col>
        </Row>
        <Container/>
        <Row>
          <Col>
          <Col className='mt-5'>
          <Card style={{ width: '18rem' }} id='cartC'>
          <Card.Img variant="top" src={key} style={{height:'290px', width:'280px'}} />
          <Card.Body>
            <Card.Text>
            RPM Euro Games Gaming Keyboard With 87 Keys & RGB Backlit | With Suspension Keys Wired USB
            4.5 Ratings 
            </Card.Text>
            <h6>Limited time deal <br />
            -50% ₹1,999 <br /> <br />
            M.R.P.: ₹2,999 </h6>
          <div className='w-100 d-flex justify-content-center'>
              <Button className='' id='b1' variant="primary">Buy</Button>
          </div>          
        </Card.Body>
        </Card>
          </Col>
          </Col>
        </Row>
      </div>
    
    </>
  )
}

export default Cart