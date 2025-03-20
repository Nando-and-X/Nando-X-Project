import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Nando-X</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/forecast-page">Forecast</Nav.Link>
            <Nav.Link as={Link} to="/joke-page">Joke</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                GitHub Repo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nando's Repo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">X's Repo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Docs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;