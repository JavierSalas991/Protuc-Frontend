import React, { Fragment } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import Header from "./Header";
import Empresas from "./Empresas";
import CursosYProgramas from "./CursosYProgramas";
import Novedades from "./Novedades";
import NuestroStaff from "./NuestroStaff";

const Inicio = () => {
  return (
    <Fragment>
      <PublicidadHeader />
      <Header />
      <Empresas />
      <CursosYProgramas />
      <Novedades />
      <NuestroStaff />
    </Fragment>
  );
};

export default Inicio;
