import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { iconos } from "../helpers/iconos";

const NavHamburguesa = () => {

  return (
      <Navbar variant="dark" className='nav-hamburguesa arial-rounded' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="links-nav-hamb" href="#cursos">
                <p className="p-navbar">Cursos {iconos.dropDown}</p>
              </Nav.Link>
              <Nav.Link className="links-nav-hamb" href="#certificaciones">
                <p className="p-navbar">Certificaciones</p>
              </Nav.Link>
              <Nav.Link className="links-nav-hamb" href="#quienessomos">
                <p className="p-navbar">Quienes somos</p>
              </Nav.Link>
              <Nav.Link className="links-nav-hamb" href="#empresas">
                <p className="p-navbar">Empresas</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavHamburguesa;
