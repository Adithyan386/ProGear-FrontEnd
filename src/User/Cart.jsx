import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import key from '../Assets/mini.jpg';
import './card.css';
import { Link } from 'react-router-dom';
import { DeleteCart, getcartProduct } from '../Service/AllApi';
import { baseURL } from '../Service/baseUrl';

function Cart() {

  const [product, setproduct] = useState([])

  const getcartitem = async()=>{
    const token = sessionStorage.getItem('token')
    const userid = sessionStorage.getItem('user')
    const user = JSON.parse(userid)?._id
    console.log(token);
    

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await getcartProduct(user,reqheader)

    setproduct(response?.data?.product)
  }

  useEffect(()=>{
    getcartitem()
  },[])
  

  const handledelete = async(id)=>{
    const token = sessionStorage.getItem('token')

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await DeleteCart(id,reqheader)
    console.log(response);
    
    if(response.status === 200){
      getcartitem()
    }
  }

  return (
    <Container className="py-4">
      {/* Cart Table */}
      <Row>
       
            <Col xs={12}>
          <h4 className="mb-4">Your Cart</h4>
          <Table responsive="sm" bordered className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Ordered Products</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
              product?.map((cartitem)=>(
                <tr>
                <td>1</td>
                <Link to={`/details1/${cartitem?.productId?._id}`} style={{textDecoration:'none', color:'black'}}><td>{cartitem?.productId?.productname}</td></Link>
                <td>
                  <img
                    src={`${baseURL}/uploads/${cartitem?.productId?.image}`}
                    alt="Gaming Keyboard"
                    style={{ height: '50px', width: '100px' }}
                  />
                </td>
                <td>&#8377;{cartitem?.productId?.price}</td>
                <td>
                  <button className="btn btn-dark" onClick={()=>handledelete(cartitem?.productId?._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              ))
             }
            </tbody>
          </Table>
        </Col>
        

        
      </Row>

      {/* Product Details Card */}
      <Row className="mt-5 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="text-center shadow" id="cartC">
            <Card.Img
              variant="top"
              src={key}
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Text>
                RPM Euro Games Gaming Keyboard With 87 Keys & RGB Backlit |
                With Suspension Keys Wired USB
                <br />
                <strong>4.5 Ratings</strong>
              </Card.Text>
              <h6 className="text-danger">
                <small className="text-muted">M.R.P.: ₹2,999</small>
              </h6>
              <Button variant="dark" id="b1"><Link to={'/orderpage'} style={{textDecoration:'none',color:'black'}}>Place Order</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
