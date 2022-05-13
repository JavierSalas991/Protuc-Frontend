import { React, useEffect, useState, Fragment } from "react";
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
}) => {
  const [cantImagenes, setCantImagenes] = useState(4);

  const handleInscripcion = () => {
    window.location = "/protuc/curso"
  };

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
        <div className="d-flex justify-content-center">
          <p className="text-light my-4 cursos-titulo">
            Conoce nuestros cursos y programas
          </p>
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
        interval={3500}
        transitionTime={2000}
      >
        {info.map((item, key) => {
          return (
            <Fragment key={key} className="">
              {item.activo ? (
                <div className="mx-3 mb-4 mt-2 rounded cursos-body text-start">
                  <div className="cursos-img-container">
                    <img
                      className="w-100"
                      src={`http://flydevs.ddns.net/media/${item.imagen}`}
                    />
                  </div>
                  <div className="cursos-body-texto">
                    <p className="text-light p-2 cursos-nombre">
                      {item.nombre}
                    </p>
                    <p className="cursos-descripcion px-2 text-light">
                      {item.descripcion}
                    </p>
                    <div className="px-2 cursos-footer-container">
                      <div
                        onClick={() => {
                          handleInscripcion();
                        }}
                        className="colorsito-amarillo cursos-btn-inscribir cursos-footer"
                      >
                        Inscribite
                      </div>
                      <p className="colorsito-celeste cursos-footer">
                        +Nivel{" "}
                        {item.nivel.charAt(0).toUpperCase() +
                          item.nivel.slice(1).toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NuevoCurso;
