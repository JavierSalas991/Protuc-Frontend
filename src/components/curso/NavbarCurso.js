import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { iconos } from "../helpers/iconos";
import logo from "../../img/logos/Protuc_Identidad01.png";
import { useNavigate } from "react-router-dom";

const NavbarCurso = () => {

  let navigate = useNavigate()

  const redireccionar = (ruta) => {
    // window.location = ruta
    navigate(ruta)
  };

  return (
    <div className="container-fluid">
      <div
        className="nav-bar-curso row d-none d-lg-block"
        style={{ fontSize: "1.1em" }}
      >
        <Navbar variant="dark" expand="lg">
          <Container className="pb-1">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => redireccionar("/inicio")}
                  className="links-nav"
                  // href="#cursos"
                >
                  <img style={{ height: "5vw" }} src={logo}></img>
                </Nav.Link>
                <Nav.Link className="links-nav" href="#cursos">
                  <p className="p-navbar-curso ms-3">Cursos {iconos.dropDown}</p>
                </Nav.Link>
                <Nav.Link className="links-nav" href="#certificaciones">
                  <p className="p-navbar-curso">Certificaciones</p>
                </Nav.Link>
                <Nav.Link className="links-nav" href="#quienessomos">
                  <p className="p-navbar-curso">Quienes somos</p>
                </Nav.Link>
                <Nav.Link className="links-nav" href="#empresas">
                  <p className="p-navbar-curso">Empresas</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarCurso;
