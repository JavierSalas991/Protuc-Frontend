import {React, useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";

const NuevaEmpresas = ({
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

  const [cantImagenes,setCantImagenes] = useState(5);

  // let cantImagenes = 0;
 
  useEffect(() => {
    const adaptarPantalla = () => {
      if (window.screen.width <= 786){
        setCantImagenes(2)
      } else {
        setCantImagenes(5)
      }
      let mediaqueryList = window.matchMedia("(max-width: 768px)");
      mediaqueryList.addEventListener('change', (EventoMediaQueryList)=>{
        if (EventoMediaQueryList.matches) {
          // Realizamos las acciones cuando cambia el estado de la mediaquery y ahora cumple su valor
          setCantImagenes(2)

        } else {
          setCantImagenes(5)
        }
      })
      
    };

    adaptarPantalla();
  }, []);

  return (
    <div className="px-4 text-center sponsors-container py-2">
      <p className="sponsors-titulo text-light mt-3">Las empresas tambien crecen con nosotros. <span id="conoce-mas">Conoce más.</span></p>
      <Carousel
        className="carousel-sponsors p-4"
        centerSlidePercentage={100 / cantImagenes}
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
            <div key={key}>
              <img className="sponsors-img" src={`http://flydevs.ddns.net/media/${item.logo}`} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NuevaEmpresas;
