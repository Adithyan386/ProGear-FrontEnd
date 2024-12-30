import React, { useEffect, useState } from 'react'
import { Card, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { showproductss } from '../Service/AllApi'
import { baseURL } from '../Service/baseUrl'
import './shop.css';

function Shop() {
    const [showproduct, setshowproduct] = useState([])
    const [seachKey, setSearchKey] = useState('')

    const getproduct = async () => {
        const response = await showproductss(seachKey)
        setshowproduct(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getproduct()
    }, [seachKey])

    console.log(showproduct)
    return (
        <>
        
            <div className="container mt-4">
            <div id="search-container">
                <div className="search mb-2">
                    <input  placeholder="Search..." type="text" className='rounded' onChange={(e)=>setSearchKey(e.target.value)} />
                    <button className="btn btn-outline-dark rounded" type="submit">Search</button>
                </div>
            </div>                
                <Row>
                    {showproduct.map((items) => {
                        return (
                            <Col key={items.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <Card style={{ width: '100%' }}>
                                    <Card.Img
                                        variant="top"
                                        src={`${baseURL}/uploads/${items.image}`}
                                        style={{ height: '290px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Text>
                                            <Link to={`/details1/${items._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                {items.productname}
                                            </Link>
                                        </Card.Text>
                                        <p>${items.price}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default Shop
