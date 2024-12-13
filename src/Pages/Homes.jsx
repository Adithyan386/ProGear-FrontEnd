import React from 'react'
import './homes.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Homes() {
  return (
    <>
      <div className='home'>
        <div className='hed'>
          <h2>Experience Your Online Shoping</h2>
          <p>Book Your Gadget Now</p>
          <Button variant="outline-warning"><Link to={'/shop'} style={{textDecoration:'none', color:'white'}}>Shop Now</Link></Button>
        </div>      
      </div>
    </>
  )
}

export default Homes