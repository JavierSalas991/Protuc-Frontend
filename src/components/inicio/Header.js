import React, { Fragment, useEffect } from "react";
import Carrousel from "./Carrousel";
import NavbarProtuc from "./NavbarProtuc";
import "./Inicio.css";

const Header = ({infoGeneral}) => {
  return (
    <Fragment>
      <NavbarProtuc />
      <Carrousel infoCarousel={infoGeneral.carrousel} />
    </Fragment>
  );
};

export default Header;
