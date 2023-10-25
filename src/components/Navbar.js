import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <div className="container">
      <Navbar  variant="dark" style={{ backgroundColor: '#1f1f1f' }}>
      <Navbar.Brand as={Link} to="/">Sarv</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/showcases">Showcases</Nav.Link>
          <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>

        </Nav>
      </Navbar>
    </div>
  );
}



export default CustomNavbar;
