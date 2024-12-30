import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './header.css'
import logo from '../Assets/Free_Simple_Modern_Circle_Design_Studio_Logo-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../Context'
function Header() {

  const {LoginRespones,setLoginRespones} = useContext(LoginContext)
  const [user, setuser] = useState({})
  const navigate = useNavigate()
  const  [token,setToken] = useState('')
useEffect(()=>{
  setToken(sessionStorage.getItem('token'))
  const details = sessionStorage.getItem('user')
  setuser(JSON.parse(details))

},[LoginRespones])

const handleLogout = ()=>{
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('user')
  navigate('/login')
  setLoginRespones('')
}


  return (
    <>
      {
        user?.role === 1?
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">AdminDash</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/admin'} style={{textDecoration:'none', color:'black'}}>Home</Link></Nav.Link>
          </Nav>
          <Button variant="secondary" onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>:
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <img src={logo} alt="" />
        <Navbar.Brand id='pro'><Link to={'/home'} style={{textDecoration:'none', color:'black'}}>Pro<span id='gear'>Gear</span></Link></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={'/home'} style={{textDecoration:'none', color:'black'}}>Home</Link></Nav.Link>
            <Nav.Link><Link to={'/about'} style={{textDecoration:'none', color:'black'}}>About</Link></Nav.Link>
            <Nav.Link><Link to={'/contact'} style={{textDecoration:'none', color:'black'}}>Contact</Link></Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={'/keyboard'} style={{textDecoration:'none', color:'black'}}>KeyBoard</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'/mouse'} style={{textDecoration:'none', color:'black'}}> Mouse</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to={'/monitor'} style={{textDecoration:'none', color:'black'}}>Monitor</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'/hard'} style={{textDecoration:'none', color:'black'}}>HardDisk</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> 

            
          <div>

         { 
          !token && 
         <>
            <button className='btn btn-outline-info mx-2'><Link to={'/login'} style={{textDecoration:'none', color:'black'}}>Login</Link></button>    
            <button className='btn btn-outline-info mx-2'><Link to={'sign'} style={{textDecoration:'none', color:'black'}}>Sign In</Link></button>
          
         </>
        }{
          token &&
          <button className='btn btn-outline-info mx-2'><Link to={'/cart'} style={{textDecoration:'none', color:'black'}}><span>0</span> Cart</Link></button>
          }
          </div> 
    {
      token &&
    <>
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <i class="fa-regular fa-user"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item><Link to={'/profile'} style={{textDecoration:'none', color:'black'}}>My Profile</Link></Dropdown.Item>
            <Dropdown.Item><Link to={'/userorder'} style={{textDecoration:'none', color:'black'}}>My Orders</Link></Dropdown.Item>
            <Dropdown.Item onClick={handleLogout} style={{textDecoration:'none',color:'black'}}>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>   
            
    </>
    }
        </Navbar.Collapse>
      </Container>
    </Navbar>
      }
    
    </>
  )
}

export default Header