import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <LinkContainer to={`/`}>
          <Navbar.Brand>Birding101</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={`/`}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/auth`}>
              <Nav.Link>Auth</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
