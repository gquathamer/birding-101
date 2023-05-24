import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to={`auth`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Auth
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
