import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./Navigation.css";
function Navigation() {
  const registrationMessage = localStorage.getItem("loginMessage");
  const adminMessage = localStorage.getItem("adminMessage");

  const handleClear = () => {
    localStorage.removeItem("loginMessage");
    localStorage.removeItem("adminMessage");
    window.location.replace("/");
    console.log("Item removed from local storage");
  };

  return (
    <Navbar className="navbar" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Le Quai Antique
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-around "
        >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/reserver">
              Reserver
            </Nav.Link>
            {adminMessage && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/editmenus">
                  Editmenus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tablesList">
                  Tables
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/reservationsList">
                  Reservations
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          {!registrationMessage && !adminMessage && (
            <Nav>
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          )}
          {registrationMessage && (
            <Nav>
              <Navbar.Brand style={{ fontSize: "15px" }}>
                Vous etes Connecté en tant qu'utilisateur |
              </Navbar.Brand>
              <Nav.Link onClick={handleClear}>Déconnexion</Nav.Link>
            </Nav>
          )}
          {adminMessage && (
            <Nav>
              <Navbar.Brand style={{ fontSize: "15px" }}>
                Vous etes Connecté en tant qu'Admin |
              </Navbar.Brand>
              <Nav.Link onClick={handleClear}>Déconnexion</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
