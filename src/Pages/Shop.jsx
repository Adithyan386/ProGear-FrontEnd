import React from 'react'
import { Button, Card } from 'react-bootstrap'
import mouse from '../Assets/download (2).jpg'
import { Link } from 'react-router-dom'
function Shop() {
  return (
    <>
    <div className='container mt-4 me-4'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mouse} style={{height:'290px', width:'280px'}} />
          <Card.Body>
            <Card.Text><Link to={'/details'} style={{textDecoration:'none',color:'black'}}>
            Razer Viper V3 Pro Wireless Mouse: 54g Lightweight 8K Polling 35K DPI Optical Sensor Gen3 Optical Switches 8 Programmable Buttons 95 Hr Battery
            4.5 Ratings 
            </Link>
            </Card.Text>
            <h6>Limited time deal <br />
            -50% ₹12,999 <br /> <br />
            M.R.P.: ₹25,999 </h6>
          </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Shop