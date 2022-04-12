import React from "react";
import {Navbar,Form,Button,Nav} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">AICTE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/user/dashboard'>Dashboard</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default Header;