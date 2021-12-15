import React from "react";
import { Carousel, Button } from "react-bootstrap";
import fondoCeleste from "../../img/fondoCeleste.png";

const Carrousel = ({ infoCarousel }) => {
  console.log(infoCarousel);
  return (
    // <Carousel>
    //   <Carousel.Item interval={1000}>
    //     <img
    //       className="d-block w-100"
    //       src={fondoCeleste}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img
    //       className="d-block w-100"
    //       src={fondoCeleste}
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={fondoCeleste}
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide arial-rounded"
        data-bs-ride="carousel"
      >
        <div className='d-flex justify-content-center'>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <div className="carousel-indicators">
            {infoCarousel.map((item, key) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={key}
                  className={key === 0 ? "active" : ""}
                  aria-current={key === 0 ? "true" : ""}
                  aria-label="Slide 1"
                ></button>
              );
            })}
          </div>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="carousel-inner">
          {infoCarousel.map((item, key) => {
            return (
              <div
                className={key === 0 ? "carousel-item active" : "carousel-item"}
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
                      <h2 className=" text-light">{item.titulo}</h2>
                      <p>{item.subtitulo}</p>
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
          })}
        </div>
      </div>

      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide arial-rounded"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {infoCarousel.map((item, key) => {
            return (
              <div className={key === 0 ? "carousel-item active" : "carousel-item"}>
                <img
                  src={`http://flydevs.ddns.net/media/${item.img}`}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block h-100">
                  <div className="row h-100">
                    <div className="col-4 "></div>
                    <div className="col-6 d-flex flex-column justify-content-end align-items-start text-start">
                      <h2 className=" text-light">{item.titulo}</h2>
                      <p>{item.subtitulo}</p>
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
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default Carrousel;
