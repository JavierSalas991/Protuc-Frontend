import Axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import CursosYProgramas from "./CursosYProgramas";
import Empresas from "./Empresas";
import Header from "./Header";

const Inicio = () => {

  const [infoGeneral, setInfoGeneral] = useState(null)

   const getHome = async () => {
    const res = await Axios.get("http://flydevs.ddns.net/home")
    console.log(res)
    return (res)
}

  useEffect( async () => {
    console.log('se ejecuta useeffect')
    setInfoGeneral(await getHome())
    console.log(infoGeneral)
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
