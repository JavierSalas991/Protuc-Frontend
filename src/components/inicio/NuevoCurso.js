import { React, useEffect, useState, Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button, Card } from "react-bootstrap";
import { urlServidor } from "../helpers/urlHelper";

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

  const handleInscripcion = (id) => {
    window.location = `/protuc/curso/${id}`
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
        className="carousel-cursos py-1"
        centerSlidePercentage={100 / cantImagenes }
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
        transitionTime={500}
      >
        {info.map((item, key) => {
          return (
            <Fragment key={key} className="">
              {item.activo ? (
                // <div className="h-100 mx-3 mb-4 mt-2 rounded cursos-body text-start">
                //   <div className="cursos-img-container">
                //     <img
                //       className="w-100"
                //       src={`${urlServidor}/media/${item.imagen}`}
                //     />
                //   </div>
                //   <div className="p-2 cursos-body-texto d-flex flex-column justify-content-between bg-success">
                //     <div>
                //       <p className="text-light p-2 cursos-nombre">
                //         {item.nombre}
                //       </p>
                //       <p className="cursos-descripcion px-2 text-light">
                //         {item.descripcion}
                //       </p>
                //     </div>
                //     <div className="px-2 cursos-footer-container">
                //       <div
                //         onClick={() => {
                //           handleInscripcion();
                //         }}
                //         className="colorsito-amarillo cursos-btn-inscribir cursos-footer"
                //       >
                //         Inscribite
                //       </div>
                //       <p className="colorsito-celeste cursos-footer">
                //         +Nivel{" "}
                //         {item.nivel.charAt(0).toUpperCase() +
                //           item.nivel.slice(1).toLowerCase()}
                //       </p>
                //     </div>
                //   </div>
                // </div>
                <Card
                  className=" h-100 mx-3 mb-4 mt-2 rounded cursos-body text-start"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <div className="cursos-img-container">
                    <img
                      className="w-100"
                      src={`${urlServidor}/media/${item.imagen}`}
                    />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column justify-content-between">
                    <div className="m-0 p-0">
                      <Card.Title
                        className="text-light cursos-nombre"
                        style={{ "font-size": "1.4em" }}
                      >
                        {item.nombre}
                      </Card.Title>
                      <p className="mt-3 text-light">
                        {item.descripcion}
                      </p>
                    </div>
                    <div className=" m-0 p-0" style={{ "font-size": "1em" }}>
                      <div className="d-flex justify-content-between m-0 p-0 align-items-end">
                        <p
                          onClick={() => {
                            handleInscripcion(item.id);
                          }}
                          className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ) : null}
            </Fragment>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NuevoCurso;
