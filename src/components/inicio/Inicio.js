import React, { Fragment, useState, useEffect } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import Header from "./Header";
import Empresas from "./Empresas";
import CursosYProgramas from "./CursosYProgramas";
import Novedades from "./Novedades";
import NuestroStaff from "./NuestroStaff";
import Axios from "axios";
import NavHamburguesa from "./NavHamburguesa";

const Inicio = () => {
  const [infoGeneral, setInfoGeneral] = useState(null);

  const getHome = async () => {
    const res = await Axios.get("http://flydevs.ddns.net/protucapi/home/");
    return res;
  };

  useEffect(async () => {
    let res = await getHome();
    setInfoGeneral(res.data);
  }, []);

  return (
    <Fragment>
      {infoGeneral ? (
        <>
          {infoGeneral.banner_header[0].activo ? (
            <PublicidadHeader banner_header={infoGeneral.banner_header[0]} />
          ) : null}
          <NavHamburguesa />
          <Header infoGeneral={infoGeneral} />
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
