import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg">
        <div className="container">
          <LinkContainer to="/">
            <Navbar.Brand className="d-lg-none">D</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-between">
              <Nav.Link href="#home">D</Nav.Link>
              <Nav.Link href="#Mac">Mac</Nav.Link>
              <Nav.Link href="#iPad">iPad</Nav.Link>
              <Nav.Link href="#iPhone">iPhone</Nav.Link>
              <Nav.Link href="#Watch">Watch</Nav.Link>
              <Nav.Link href="#search">
                <i class="fas fa-search"></i>
              </Nav.Link>
              <Nav.Link href="#bag">
                <i class="fas fa-shopping-bag"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
