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
import NuevaEmpresas from "./NuevaEmpresas";
import Avion from "./Avion";
import Carrousel from "./Carrousel";
import { urlServidor } from "../helpers/urlHelper";

const Inicio = ({ infoGeneral }) => {

  const [cursos, setCursos] = useState(null);
  const [sponsors, setSponsors] = useState(null);



  const getCursos = async () => {
    const res = await Axios.get(`${urlServidor}/protucapi/cursos/`);
    return res;
  }

  const getSponsors = async () => {
    const res = await Axios.get(`${urlServidor}/protucapi/sponsors/`);
    return res;
  }

  useEffect(async () => {
    let cursos_ = await getCursos();
    let sponsors_ = await getSponsors();
    setCursos(cursos_.data);
    setSponsors(sponsors_.data);
  }, []);

  return (

    <>
      {infoGeneral.banner_header[0].activo ? (
        <PublicidadHeader banner_header={infoGeneral.banner_header[0]} />
      ) : null}
      <NavHamburguesa />
      {/* <Header infoGeneral={infoGeneral} /> */}
      <NavbarProtuc />
      {/* <Carrousel infoCarousel={infoGeneral.carrousel}></Carrousel> */}
      <NuevoCarrousel info={infoGeneral.carrousel} imagesAtOnce={3} showArrows={false} showIndicators={true} showStatus={false} showThumbs={false} autoFocus={false} autoPlay={true} centerMode={false} infiniteLoop={true} stopOnHover={false} swipeable={false} animationHandler={'fade'} />
      {/* {sponsors !== null ? (
              <NuevaEmpresas info={sponsors} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoFocus={false} autoPlay={true} centerMode={true} infiniteLoop={true} stopOnHover={false} />
                
          ) : (
            null
          )}  */}
      <Avion></Avion>
      {/* <Empresas /> */}
      {/* <CursosYProgramas /> */}
      {cursos !== null ? (
        <NuevoCurso info={cursos} showArrows={true} showIndicators={false} showStatus={false} showThumbs={false} autoFocus={true} autoPlay={true} centerMode={true} infiniteLoop={true} stopOnHover={true} />
      ) : (
        null
      )}
      <Novedades />
      {/* <NuestroStaff docentes={infoGeneral.docentes} /> */}
      <NuevoStaff info={infoGeneral.docentes} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoFocus={false} autoPlay={true} centerMode={true} infiniteLoop={true} stopOnHover={false} />
      <Footer color='dark'></Footer>
    </>

  );
};

export default Inicio;
