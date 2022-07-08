import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { iconos } from "../helpers/iconos";
import logo from "../../img/logos/Protuc_Identidad01.png";

const NavHamburguesa = () => {

  const redireccionar = (ruta) => {
    window.location = ruta
  };

  return (
    <div className="d-inline d-lg-none">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"
            onClick={() => redireccionar("/protuc/inicio")}
            href="#cursos"
          >
            <img style={{ height: "10vw" }} src={logo}></img>
          </a>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            {iconos.hamburguesa}
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><p className="m-0 text-light">Cursos</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><p className="m-0 text-light">Certificaciones</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><p className="m-0 text-light">Quienes somos</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><p className="m-0 text-light">Empresas</p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar variant="dark" className='nav-hamburguesa arial-rounded' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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
      </Navbar> */}
    </div>
  );
};

export default NavHamburguesa;
