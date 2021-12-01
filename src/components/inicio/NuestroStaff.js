import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import fondoCeleste from "../../img/fondoCeleste.png";
import fondoNaranja from "../../img/fondoNaranja.png";
import fondoVerde from "../../img/fondoVerde.png";

const NuestroStaff = ({ docentes }) => {

  const construirArregloo = () => {
    let staffSeparado = [];
    staffSeparado[0].push("hola");
  };

  return (
    <Carousel indicators={false}>
      {docentes.map((docente, key) => {
        if (key < docentes.length - 2) {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={fondoCeleste}
                alt="Third slide"
              />
              <div className="h-100 bg-dark">
                <Carousel.Caption className="h-100 d-flex align-items-center justify-content-between">
                  <div>
                    <img
                      className="img-docente"
                      src={`http://flydevs.ddns.net/media/${docente.foto_personal}`}
                      alt={`${docente.nombre} ${docente.apellido}`}
                    ></img>
                    <div className="card-docente bg-light text-dark">
                      <p>{docente.alias}</p>
                      <p>{docente.titulo_grado}</p>
                    </div>
                  </div>
                  {docentes[key + 1] ? (
                    <div>
                      <img
                        className="img-docente"
                        src={`http://flydevs.ddns.net/media/${
                          docentes[key + 1].foto_personal
                        }`}
                        alt={`${docentes[key + 1].nombre} ${
                          docentes[key + 1].apellido
                        }`}
                      ></img>
                      <div className="card-docente bg-light text-dark">
                        <p>{docentes[key + 1].alias}</p>
                        <p>{docentes[key + 1].titulo_grado}</p>
                      </div>
                    </div>
                  ) : null}
                  {docentes[key + 2] ? (
                    <div>
                      <img
                        className="img-docente"
                        src={`http://flydevs.ddns.net/media/${
                          docentes[key + 2].foto_personal
                        }`}
                        alt={`${docentes[key + 2].nombre} ${
                          docentes[key + 2].apellido
                        }`}
                      ></img>
                      <div className="card-docente bg-light text-dark pt-2">
                        <p>{docentes[key + 2].alias}</p>
                        <p>{docentes[key + 2].titulo_grado}</p>
                      </div>
                    </div>
                  ) : null}
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        } else if (key === docentes.length - 2) {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={fondoCeleste}
                alt="Third slide"
              />
              <div className="h-100 bg-dark">
                <Carousel.Caption className="h-100 d-flex align-items-center justify-content-between">
                  <div>
                    <img
                      className="img-docente"
                      src={`http://flydevs.ddns.net/media/${docente.foto_personal}`}
                      alt={`${docente.nombre} ${docente.apellido}`}
                    ></img>
                    <div className="card-docente bg-light text-dark">
                      <p>{docente.alias}</p>
                      <p>{docente.titulo_grado}</p>
                    </div>
                  </div>
                  {docentes[key + 1] ? (
                    <div>
                      <img
                        className="img-docente"
                        src={`http://flydevs.ddns.net/media/${
                          docentes[key + 1].foto_personal
                        }`}
                        alt={`${docentes[key + 1].nombre} ${
                          docentes[key + 1].apellido
                        }`}
                      ></img>
                      <div className="card-docente bg-light text-dark">
                        <p>{docentes[key + 1].alias}</p>
                        <p>{docentes[key + 1].titulo_grado}</p>
                      </div>
                    </div>
                  ) : null}
                  {docentes[0] ? (
                    <div>
                      <img
                        className="img-docente"
                        src={`http://flydevs.ddns.net/media/${
                          docentes[0].foto_personal
                        }`}
                        alt={`${docentes[0].nombre} ${
                          docentes[0].apellido
                        }`}
                      ></img>
                      <div className="card-docente bg-light text-dark pt-2">
                        <p>{docentes[0].alias}</p>
                        <p>{docentes[0].titulo_grado}</p>
                      </div>
                    </div>
                  ) : null}
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        } else {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={fondoCeleste}
                alt="Third slide"
              />
              <div className="h-100 bg-dark">
                <Carousel.Caption className="h-100 d-flex align-items-center justify-content-between">
                  <div>
                    <img
                      className="img-docente"
                      src={`http://flydevs.ddns.net/media/${docente.foto_personal}`}
                      alt={`${docente.nombre} ${docente.apellido}`}
                    ></img>
                    <div className="card-docente bg-light text-dark">
                      <p>{docente.alias}</p>
                      <p>{docente.titulo_grado}</p>
                    </div>
                  </div>
                  {docentes[0] ? (
                    <div>
                      <img
                        className="img-docente"
                        src={`http://flydevs.ddns.net/media/${
                          docentes[0].foto_personal
                        }`}
                        alt={`${docentes[0].nombre} ${
                          docentes[0].apellido
                        }`}
                      ></img>
                      <div className="card-docente bg-light text-dark pt-2">
                        <p>{docentes[0].alias}</p>
                        <p>{docentes[0].titulo_grado}</p>
                      </div>
                    </div>
                  ) : null}
                  {docentes[1] ? (
                    <div>
                      <img
                        className="img-docente"
                        src={`http://flydevs.ddns.net/media/${
                          docentes[1].foto_personal
                        }`}
                        alt={`${docentes[1].nombre} ${
                          docentes[1].apellido
                        }`}
                      ></img>
                      <div className="card-docente bg-light text-dark pt-2">
                        <p>{docentes[1].alias}</p>
                        <p>{docentes[1].titulo_grado}</p>
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
  );
};

export default NuestroStaff;
