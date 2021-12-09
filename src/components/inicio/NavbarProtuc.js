import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { iconos } from "../helpers/iconos";

const NavbarProtuc = () => {
  return (
    <div className="nav-bar row">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="links-nav" href="#cursos">
                <p className="p-navbar">Cursos {iconos.dropDown}</p>
              </Nav.Link>
              <Nav.Link className="links-nav" href="#certificaciones">
                <p className="p-navbar">Certificaciones</p>
              </Nav.Link>
              <Nav.Link className="links-nav" href="#quienessomos">
                <p className="p-navbar">Quienes somos</p>
              </Nav.Link>
              <Nav.Link className="links-nav" href="#empresas">
                <p className="p-navbar">Empresas</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarProtuc;
