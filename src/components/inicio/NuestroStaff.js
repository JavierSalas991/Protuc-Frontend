import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import fondoCeleste from "../../img/slider_down01.jpg";
import fondoNaranja from "../../img/fondoNaranja.png";
import fondoVerde from "../../img/fondoVerde.png";
import { urlServidor } from "../helpers/urlHelper";

const NuestroStaff = ({ docentes }) => {
  return (
    <>
      {/* dispositivos grandes */}
      <div className="d-none d-md-block">
        <div className="carouselStaff">
          <Carousel indicators={false}>
            {docentes.map((docente, key) => {
              if (key % 3 === 0) {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={fondoCeleste}
                      alt="Third slide"
                      style={{ opacity: "0" }}
                    />
                    <div className="h-100">
                      <Carousel.Caption
                        className={
                          docentes[key + 2]
                            ? "h-100 d-flex align-items-center justify-content-between"
                            : "h-100 d-flex align-items-center justify-content-around"
                        }
                      >
                        <div>
                          <img
                            className="img-docente"
                            src={`${urlServidor}/media/${docente.foto_personal}`}
                            alt={`${docente.nombre} ${docente.apellido}`}
                          ></img>
                          <div className="card-docente bg-light text-dark">
                            <p className="arial-rounded pt-1">
                              {docente.alias}
                            </p>
                            <p className="aventa">{docente.titulo_grado}</p>
                          </div>
                        </div>
                        {docentes[key + 1] ? (
                          <div>
                            <img
                              className="img-docente"
                              src={`${urlServidor}/media/${docentes[key + 1].foto_personal
                                }`}
                              alt={`${docentes[key + 1].nombre} ${docentes[key + 1].apellido
                                }`}
                            ></img>
                            <div className="card-docente bg-light text-dark">
                              <p className="arial-rounded pt-1">
                                {docentes[key + 1].alias}
                              </p>
                              <p className="aventa">
                                {docentes[key + 1].titulo_grado}
                              </p>
                            </div>
                          </div>
                        ) : null}
                        {docentes[key + 2] ? (
                          <div>
                            <img
                              className="img-docente"
                              src={`${urlServidor}/media/${docentes[key + 2].foto_personal
                                }`}
                              alt={`${docentes[key + 2].nombre} ${docentes[key + 2].apellido
                                }`}
                            ></img>
                            <div className="card-docente bg-light text-dark">
                              <p className="arial-rounded pt-1">
                                {docentes[key + 2].alias}
                              </p>
                              <p className="aventa">
                                {docentes[key + 2].titulo_grado}
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                );
              }
            })}
          </Carousel>
        </div>
        <img src={fondoCeleste} className="w-100"></img>
      </div>

      {/* dispositivos chicos */}
      <div className="d-block d-md-none">
        <div className="carouselStaff">
          <Carousel indicators={false}>
            {docentes.map((docente, key) => {
              if (key % 3 === 0) {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={fondoCeleste}
                      alt="Third slide"
                      style={{ opacity: "0" }}
                    />
                    <div className="h-100">
                      <Carousel.Caption
                        className={
                          docentes[key + 2]
                            ? "h-100 d-flex align-items-center justify-content-between"
                            : "h-100 d-flex align-items-center justify-content-around"
                        }
                      >
                        <div>
                          <img
                            className="img-docente"
                            src={`${urlServidor}/media/${docente.foto_personal}`}
                            alt={`${docente.nombre} ${docente.apellido}`}
                          ></img>
                          <div className="card-docente bg-light text-dark">
                            <p className="arial-rounded pt-1 pb-0 m-0">
                              {docente.alias}
                            </p>
                            <p className="aventa">{docente.titulo_grado}</p>
                          </div>
                        </div>
                        {docentes[key + 1] ? (
                          <div>
                            <img
                              className="img-docente"
                              src={`${urlServidor}/media/${docentes[key + 1].foto_personal
                                }`}
                              alt={`${docentes[key + 1].nombre} ${docentes[key + 1].apellido
                                }`}
                            ></img>
                            <div className="card-docente bg-light text-dark">
                              <p className="arial-rounded pt-1 pb-0 m-0">
                                {docentes[key + 1].alias}
                              </p>
                              <p className="aventa">
                                {docentes[key + 1].titulo_grado}
                              </p>
                            </div>
                          </div>
                        ) : null}
                        {docentes[key + 2] ? (
                          <div>
                            <img
                              className="img-docente"
                              src={`${urlServidor}/media/${docentes[key + 2].foto_personal
                                }`}
                              alt={`${docentes[key + 1].nombre} ${docentes[key + 2].apellido
                                }`}
                            ></img>
                            <div className="card-docente bg-light text-dark">
                              <p className="arial-rounded pt-1 pb-0 m-0">
                                {docentes[key + 2].alias}
                              </p>
                              <p className="aventa">
                                {docentes[key + 2].titulo_grado}
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                );
              }
            })}
          </Carousel>
        </div>
        <img src={fondoCeleste} className="w-100"></img>
      </div>
    </>
  );
};

export default NuestroStaff;
