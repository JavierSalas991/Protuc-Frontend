import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { iconos } from '../helpers/iconos'

const NavbarProtuc = () => {
  return (
    <div className='nav-bar'>

    <Navbar variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className='links-nav' href="#cursos">Cursos {iconos.dropDown}</Nav.Link>
          <Nav.Link className='links-nav' href="#certificaciones">Certificaciones {iconos.dropDown}</Nav.Link>
          <Nav.Link className='links-nav' href="#quienessomos">Quienes somos {iconos.dropDown}</Nav.Link>
          <Nav.Link className='links-nav' href="#empresas">Empresas {iconos.dropDown}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarProtuc;
