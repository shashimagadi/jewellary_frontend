import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Home } from './Home';
export const NavbarMain = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen width
  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth >= 500 && window.innerWidth <= 800);
};


  // Use useEffect to add a resize event listener
  useEffect(() => {
    checkScreenWidth(); // Initial check
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, [isSmallScreen]);
  return (
    <div><Navbar className='navbar' expand="lg">
    <Container >
      <Navbar.Brand href="#">Sri Ganesh</Navbar.Brand>
      <div className="d-flex align-items-center">
            
      {isSmallScreen && (
              <Button
                className="me-2"
                style={{ borderRadius: '20px',marginLeft:'100px' }}
              >
                Make an Appointment11
              </Button>
            )}
          </div>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto navlinks">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button  style={{borderRadius:'20px', }}  className="ms-2 d-none d-md-block " >Make an Appoitment</Button>
        </Nav>
      </Navbar.Collapse>

      
    </Container>
  </Navbar>
  
  <Home/>
  </div>
  )
}
