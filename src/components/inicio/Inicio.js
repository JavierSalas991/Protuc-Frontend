import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import CursosYProgramas from "./CursosYProgramas";
import Empresas from "./Empresas";
import Header from "./Header";

const Inicio = () => {

  const [infoGeneral, setInfoGeneral] = useState(null)

  useEffect( async () => {
    const res = await axios.get("http://flydevs.ddns.net/protucapi/home")
    console.log(res)
  }, [])
  return (
    <Fragment>
      <PublicidadHeader/>
       <Header/>
      <Empresas/>
      <CursosYProgramas/>
    </Fragment>
  );
};

export default Inicio;
