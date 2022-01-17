import { React, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";

const NuevoStaff = ({
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

  const [cantImagenes,setCantImagenes] = useState(3);

  // let cantImagenes = 0;
 
  useEffect(() => {
    const adaptarPantalla = () => {
      if (window.screen.width <= 786){
        setCantImagenes(1)
      } else {
        setCantImagenes(3)
      }
      let mediaqueryList = window.matchMedia("(max-width: 768px)");
      mediaqueryList.addEventListener('change', (EventoMediaQueryList)=>{
        if (EventoMediaQueryList.matches) {
          // Realizamos las acciones cuando cambia el estado de la mediaquery y ahora cumple su valor
          setCantImagenes(1)

        } else {
          setCantImagenes(3)
        }
      })
      
    };

    adaptarPantalla();
  }, []);

  
  return (
    <div className="bg-docentes">
      <Carousel
        className="carousel-docentes"
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
            <div key={key} className="my-4">
              {item.activo ? (
                <>
                  <img
                    className="nueva-img-docentes rounded-circle"
                    src={`http://flydevs.ddns.net/media/${item.foto_personal}`}
                  />
                  <div className="rounded d-flex justify-content-center ">
                    <p className="mt-3 px-4 py-2 rounded text-dark docentes-recuadro">
                      <span className="docentes-alias">{item.alias}</span>
                      <br />
                      <span className="docentes-titulo">
                        {" "}
                        {item.titulo_grado}
                      </span>
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NuevoStaff;
