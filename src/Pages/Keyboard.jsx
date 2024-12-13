import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getproductcategory } from '../Service/AllApi';
import { baseURL } from '../Service/baseUrl';


function Keyboard({category}) {
  // console.log(category);

  const [products,setgetProducts] = useState([])

  const getproduct = async()=>{
    const response = await getproductcategory(category)
    // console.log(response)
    setgetProducts(response.data.product)
  }
  useEffect(()=>{
    getproduct()
  },[category])
  return (
    <Container className="py-4">
      <Row className="">   
        { 
          products?.map((item, index)=>(
            <Col
            xs={12} sm={6} md={4} lg={3}>
             <Card border="light" className="shadow">
               <Card.Header className="p-0">
                 <img
                   src={`${baseURL}/uploads/${item.image}`}
                   alt="Product"
                   style={{
                     height: '200px',
                     width: '100%',
                     objectFit: 'cover',
                   }}
                   className="img-fluid"
                 />
               </Card.Header>
               <Card.Body>
                 <Card.Title><Link to={`/details1/${item._id}`} style={{textDecoration:'none', color:'black'}}>{item.productname}</Link></Card.Title>
                 <Card.Text>
                  {item.description}
                </Card.Text>
               </Card.Body>
             </Card>
           </Col>
          ))
        }     
        
      </Row>
    </Container>
  );
}

export default Keyboard;
