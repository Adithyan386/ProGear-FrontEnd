import React, { useEffect, useState } from 'react';
import './view.css';
import Editmodal from './Editmodal';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { deleteproducts, getproduct } from '../Service/AllApi';
import { baseURL } from '../Service/baseUrl';

function ViewProduct() {
  const [products,setProducts] = useState([])

  const allproducts = async ()=>{
    const token = sessionStorage.getItem('token')

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "content-type":"multipart/form-data"
    }
console.log(reqheader);
    const response = await getproduct(reqheader)
  
    setProducts(response.data.products)
 }

 const handledelete = async(id)=>{
  const token = sessionStorage.getItem('token')

  const reqheader = {
    'Authorization':`Bearer ${token}`,
    "content-type":"multipart/form-data"
  }

  const response = await deleteproducts(id,reqheader)
  console.log(response);
  if(response.status === 200){
    allproducts()
  }
 }

  useEffect(()=>{
   allproducts() 
  },[])

  // console.log(products);
  

  return (
    <Container className="py-4">
      <Row className="">
        {
          products.length >0 ?
          products.map((product, index)=>(
            <Col xs={12} sm={6} md={4} lg={3}>
            <Card border="light" className="shadow mx-auto mb-5">
              <Card.Header className="p-0">
                <img className="img-fluid"
                  src={`${baseURL}/uploads/${product.image}`}
                  alt="Product"
                  style={{
                    height: '150px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>
                    {product.productname}
                </Card.Title>
                <Card.Text>
                {product.description.slice(0,60)}...
                </Card.Text>
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-dark" onClick={()=>handledelete(product._id)}>Remove</button>
                  <Editmodal product = {product}/>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )) :"Nothing Found"
          } 
      </Row>
    </Container>
  );
}

export default ViewProduct;
