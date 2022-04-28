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
            <div
            style={{ fontSize: "1vw"}}
            >
              <img
                src={`http://flydevs.ddns.net/media/${item.img}`}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block h-100">
                <div className="row h-100">
                  <div className="col-4 "></div>
                  <div className="col-6 d-flex flex-column justify-content-end align-items-start text-start">
                    <h2 
                    className="nuevo-carousel-titulo text-light"
                    >{item.titulo}</h2>

                    <div className='divisor-carrousel-titulos'></div>

                    <h6 className="nuevo-carousel-subtitulo text-light">{item.subtitulo}</h6>

                    <button
                      className="boton-celeste-slider px-2 pt-1 pb-1"
                      style={{ "white-space": "nowrap" }}
                    >
                      {item.texto_boton}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
          // return (
          //   <div key={key} className="nuevo-carousel-body">
          //     <img className="nuevo-carousel-ancho-img" src={`http://flydevs.ddns.net/media/${item.img}`} />
          //     {item.titulo !== "" ? (
          //       <p className="nuevo-carousel-titulo">{item.titulo}</p>
          //     ) : null}
          //     {item.subtitulo !== "" ? (
          //       <p className="nuevo-carousel-subtitulo d-none d-md-block">{item.subtitulo}</p>
          //     ) : null}
          //     {item.texto_boton !== "" ? (
          //       <Button
          //         className="boton-celeste rounded-pill nuevo-carousel-btn py-2"
          //       >
          //         {item.texto_boton}
          //       </Button>
          //     ) : null}
          //   </div>
          // );
        })}
      </Carousel>
      </section>
    </>
  );
};

export default NuevoCarrousel;
