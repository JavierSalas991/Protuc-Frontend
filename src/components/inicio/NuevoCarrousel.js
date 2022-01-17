import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";

const NuevoCarrousel = ({
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
  imagesAtOnce,
}) => {
  return (
    <>
      <Carousel
        centerSlidePercentage={100 / imagesAtOnce}
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
            <div key={key} className="nuevo-carousel-body">
              <img className="nuevo-carousel-ancho-img" src={`http://flydevs.ddns.net/media/${item.img}`} />
              {item.titulo !== "" ? (
                <p className="nuevo-carousel-titulo">{item.titulo}</p>
              ) : null}
              {item.subtitulo !== "" ? (
                <p className="nuevo-carousel-subtitulo">{item.subtitulo}</p>
              ) : null}
              {item.texto_boton !== "" ? (
                <Button
                  variant={"info"}
                  className="rounded-pill text-light nuevo-carousel-btn"
                >
                  {item.texto_boton}
                </Button>
              ) : null}
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default NuevoCarrousel;
