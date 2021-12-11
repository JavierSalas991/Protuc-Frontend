import React, { Fragment, useEffect } from "react";
import Carrousel from "./Carrousel";
import NavbarProtuc from "./NavbarProtuc";
import "./Inicio.css";

const Header = () => {

    // let ancho = window.innerWidth
    // let nro = 991

    // console.log(ancho)
    // console.log(nro)
    // console.log(window.innerHeight)
    // console.log(typeof ancho)
    // console.log(typeof nro)

    // const f = () => {

    //     console.log(typeof window.innerHeight)
    //     return window.innerHeight
    //   }
    //   var intervalID = window.setInterval(f, 1000);

    //   useEffect(() => {
    //       console.log('cambia')
    //   }, [window.innerHeight])
  return (
    <Fragment>
      {window.innerWidth > 991 ? <NavbarProtuc /> : null}
      <Carrousel />
    </Fragment>
  );
};

export default Header;
