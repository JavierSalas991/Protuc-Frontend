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
                Cursos {iconos.dropDown}
              </Nav.Link>
              <Nav.Link className="links-nav" href="#certificaciones">
                Certificaciones {iconos.dropDown}
              </Nav.Link>
              <Nav.Link className="links-nav" href="#quienessomos">
                Quienes somos {iconos.dropDown}
              </Nav.Link>
              <Nav.Link className="links-nav" href="#empresas">
                Empresas {iconos.dropDown}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarProtuc;
