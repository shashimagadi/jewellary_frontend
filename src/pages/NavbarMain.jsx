// import React, { useEffect, useState } from 'react'
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { Home } from './Home';
// export const NavbarMain = () => {

//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   // Function to check screen width
//   const checkScreenWidth = () => {
//     setIsSmallScreen(window.innerWidth >= 500 && window.innerWidth <= 900);
// };


//   // Use useEffect to add a resize event listener
//   useEffect(() => {
//     checkScreenWidth(); // Initial check
//     window.addEventListener('resize', checkScreenWidth);

//     return () => {
//       window.removeEventListener('resize', checkScreenWidth);
//     };
//   }, [isSmallScreen]);
//   return (
//     <div><Navbar className='navbar' expand="lg">
//     <Container >
//       <Navbar.Brand href="#">Sri Ganesh</Navbar.Brand>
//       <div className="d-flex align-items-center">
            
//       {isSmallScreen && (
//               <Button
//                 className=""
//                 style={{ borderRadius: '20px',marginLeft:'100px' }}
//               >
//                 Make an Appointment11
//               </Button>
//             )}
//           </div>
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="ms-auto navlinks" >
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#about">About</Nav.Link>
//           <Nav.Link href="#services">Services</Nav.Link>
//           <Nav.Link href="#contact">Department</Nav.Link>
//           <Nav.Link href="#contact">Faculty</Nav.Link>
//           <Nav.Link href="#contact">Contact</Nav.Link>
//           <Button  style={{borderRadius:'20px', }}  className="ms-2 d-none d-md-block " >Make an Appoitment</Button>
//         </Nav>
//       </Navbar.Collapse>

      
//     </Container>
//   </Navbar>
  
//   <Home/>
//   </div>
//   )
// }



import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Home } from './Home';

export const NavbarMain = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen width
  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 1000);
  };

  // Add a resize event listener
  useEffect(() => {
    checkScreenWidth(); // Initial check
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div>
      {/* <Navbar className="navbar" expand="lg" sticky="top">
        <Container className="d-flex justify-content-between align-items-center ">
          <Navbar.Brand href="#" className=''>Sri Ganesh</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className={isSmallScreen ? 'toggle-btn' : ''} />
          <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-between align-items-center">
            <Nav className="navlinks">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#department">Department</Nav.Link>
              <Nav.Link href="#faculty">Faculty</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            {!isSmallScreen && (
              <Button className="btn-make" style={{ borderRadius: '20px' }}>
                Make an Appointment
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

<Navbar  expand="lg" className="navbar" sticky="top">
      <Container>
        {/* Left-aligned heading */}
        <Navbar.Brand href="#">Sri Ganesh</Navbar.Brand>

        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="navbar-nav">
          {/* Right-aligned links */}
          <Nav className="ms-auto navlinks">
                   <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Department</Nav.Link>
         <Nav.Link href="#contact">Faculty</Nav.Link>
       <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {/* Button */}
          <Button variant="primary" className="ms-4" href="#contact">
           make appointment
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Home />
    </div>
  );
};
