import React, { Fragment, useState, useEffect } from "react";
import PublicidadHeader from "../common/PublicidadHeader";
import Header from "./Header";
import Empresas from "./Empresas";
import CursosYProgramas from "./CursosYProgramas";
import Novedades from "./Novedades";
import NuestroStaff from "./NuestroStaff";
import Axios from "axios";
import NavHamburguesa from "./NavHamburguesa";
import Footer from "../common/Footer";
import NuevoCarrousel from "./NuevoCarrousel";
import NavbarProtuc from "./NavbarProtuc";
import NuevoStaff from "./NuevoStaff";
import NuevoCurso from "./NuevoCurso";

const Inicio = () => {
  const [infoGeneral, setInfoGeneral] = useState(null);
  const [cursos, setCursos] = useState(null);

  const getHome = async () => {
    const res = await Axios.get("http://flydevs.ddns.net/protucapi/home/");
    return res;
  };

  const getCursos = async () => {
    const res = await Axios.get("http://flydevs.ddns.net/protucapi/cursos/");
    return res;
  }

  useEffect(async () => {
    let res = await getHome();
    let cursos_ = await getCursos();
    setInfoGeneral(res.data);
    setCursos(cursos_.data);
    
    
  }, []);

  return (
    <Fragment>
      {infoGeneral ? (
        <>
          {infoGeneral.banner_header[0].activo ? (
            <PublicidadHeader banner_header={infoGeneral.banner_header[0]} />
          ) : null}
          <NavHamburguesa />
          {/* <Header infoGeneral={infoGeneral} /> */}
          <NavbarProtuc/>
          
          <NuevoCarrousel info={infoGeneral.carrousel} imagesAtOnce={3} showArrows={true} showIndicators={true} showStatus={false} showThumbs={false} autoFocus={false} autoPlay={true} centerMode={false} infiniteLoop={true} stopOnHover={false}/>
          {/* <Empresas /> */}
          {/* <CursosYProgramas /> */}
          {cursos !== null ? (
            <NuevoCurso info={cursos} showArrows={true} showIndicators={false} showStatus={false} showThumbs={false} autoFocus={true} autoPlay={true} centerMode={true} infiniteLoop={true} stopOnHover={true} />
          ):(
            null
          )}
          {/* <Novedades /> */}
          {/* <NuestroStaff docentes={infoGeneral.docentes} /> */}
          <NuevoStaff info={infoGeneral.docentes} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoFocus={false} autoPlay={true} centerMode={true} infiniteLoop={true} stopOnHover={false}/> 
          <Footer></Footer>
        </>
      ) : null}
    </Fragment>
  );
};

export default Inicio;
