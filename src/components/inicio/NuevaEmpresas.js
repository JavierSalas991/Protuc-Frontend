import React from "react";
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
  imagesAtOnce,
}) => {
  return (
    <div className="text-center sponsors-container py-2">
      <p className="sponsors-titulo text-light mt-4">Las empresas tambien crecen con nosotros. <span id="conoce-mas">Conoce más.</span></p>
      <Carousel
        className="carousel-sponsors p-4"
        centerSlidePercentage={100 / 5}
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
