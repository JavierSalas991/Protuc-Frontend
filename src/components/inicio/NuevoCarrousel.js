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
  animationHandler,
  swipeable,
}) => {
  return (
    <>
    <section className="d-flex">
      <img className="protuc-logo" src={"http://flydevs.ddns.net/media/protuc-logo.png"}/>
      <Carousel
        transitionTime={1300}
        interval={5000}
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
        animationHandler={animationHandler}
        swipeable={swipeable}
      >
        {info.map((item, key) => {
          return (
            <div key={key} className="nuevo-carousel-body">
              <img className="nuevo-carousel-ancho-img" src={`http://flydevs.ddns.net/media/${item.img}`} />
              {item.titulo !== "" ? (
                <p className="nuevo-carousel-titulo">{item.titulo}</p>
              ) : null}
              {item.subtitulo !== "" ? (
                <p className="nuevo-carousel-subtitulo d-none d-md-block">{item.subtitulo}</p>
              ) : null}
              {item.texto_boton !== "" ? (
                <Button
                  className="boton-celeste rounded-pill nuevo-carousel-btn py-2"
                >
                  {item.texto_boton}
                </Button>
              ) : null}
            </div>
          );
        })}
      </Carousel>
      </section>
    </>
  );
};

export default NuevoCarrousel;
