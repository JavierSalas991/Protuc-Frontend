import React, { Fragment } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import Header from "./Header";
import Empresas from "./Empresas";
import CursosYProgramas from "./CursosYProgramas";
import Novedades from "./Novedades";

const Inicio = () => {
  return (
    <Fragment>
      <PublicidadHeader />
      <Header />
      <Empresas />
      <CursosYProgramas />
      <Novedades />
    </Fragment>
  );
};

export default Inicio;
