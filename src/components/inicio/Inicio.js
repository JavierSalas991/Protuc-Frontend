import React, { Fragment, useState, useEffect } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import Header from "./Header";
import Empresas from "./Empresas";
import CursosYProgramas from "./CursosYProgramas";
import Novedades from "./Novedades";
import NuestroStaff from "./NuestroStaff";
import Axios from "axios";

const Inicio = () => {
  const [infoGeneral, setInfoGeneral] = useState(null);

  const getHome = async () => {
    const res = await Axios.get("http://flydevs.ddns.net/home/");
    return res;
  };

  useEffect(async () => {
    setInfoGeneral(await getHome());
  }, []);

  return (
    <Fragment>
      {infoGeneral ? (
        <>
          <PublicidadHeader />
          <Header />
          <Empresas />
          <CursosYProgramas />
          <Novedades />
          <NuestroStaff docentes={infoGeneral.docentes} />
        </>
      ) : null}
    </Fragment>
  );
};

export default Inicio;
