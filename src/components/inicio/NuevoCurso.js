import { React, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";

const NuevoCurso = ({
  info,
  centerMode,
  autoFocus,
  autoPlay,
  infiniteLoop,
  showThumbs,
  showIndicators,
  showArrows,
  showStatus,
  stopOnHover,
}) => 
{
  const [cantImagenes, setCantImagenes] = useState(4);


  const handleInscripcion = () => {
      console.log('desde inscribirse')
  }

  useEffect(() => {
    const adaptarPantalla = () => {
      if (window.screen.width <= 786) {
        setCantImagenes(1);
      } else {
        setCantImagenes(4);
      }
      let mediaqueryList = window.matchMedia("(max-width: 768px)");
      mediaqueryList.addEventListener("change", (EventoMediaQueryList) => {
        if (EventoMediaQueryList.matches) {
          // Realizamos las acciones cuando cambia el estado de la mediaquery y ahora cumple su valor
          setCantImagenes(1);
        } else {
          setCantImagenes(4);
        }
      });
    };

    adaptarPantalla();
  }, []);

  return (
    <div className="pt-3 pb-2 arial-rounded background-azul-oscuro">
      <div style={{ "font-size": "100%" }}>
        <div
          className="d-flex justify-content-center"
        >
          <p className="text-light my-4 cursos-titulo">Conoce nuestros cursos y programas</p>
        </div>
      </div>
      <Carousel
        className="carousel-cursos py-3"
        centerSlidePercentage={100 / cantImagenes}
        width={"100%"}
        centerMode={centerMode}
        autoFocus={autoFocus}
        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        showThumbs={showThumbs}
        showIndicators={showIndicators}
        showArrows={showArrows}
        showStatus={showStatus}
        stopOnHover={stopOnHover}
      >
        {info.map((item, key) => {
          return (
            <div key={key} className="">
              {item.activo ? (
                <div className="mx-3 mb-4 mt-2 rounded cursos-body">
                  <div className="cursos-img-container">
                  <img
                    className="w-100"
                    src={`http://flydevs.ddns.net/media/${item.imagen}`}
                  />
                  </div>
                  <div className="rounded">
                    <p className="text-light mt-3 borderp-2 cursos-nombre">{item.nombre}</p>
                    <div className="cursos-footer-container text-light d-flex justify-content-between align-items-baseline px-3">
                      <div onClick={()=>{handleInscripcion()}} className="border cursos-footer colorsito-amarillo cursos-btn-inscribir">Inscribite</div>
                      <p className="colorsito-celeste cursos-footer border">+Nivel {(item.nivel).charAt(0).toUpperCase() + (item.nivel).slice(1).toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NuevoCurso;
