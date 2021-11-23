import React, { Fragment } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import CursosYProgramas from "./CursosYProgramas";
import Empresas from "./Empresas";
import Header from "./Header";

const Inicio = () => {
  return (
    <Fragment>
      <PublicidadHeader/>
       <Header/>
      <Empresas/>
      <CursosYProgramas/>
      <p>hola</p>
    </Fragment>
  );
};

export default Inicio;
