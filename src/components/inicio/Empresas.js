import React, { Fragment } from "react";
import { Row, Col } from "antd";
import empresa1 from "../../img/empresas/empresa1.png";
import empresa2 from "../../img/empresas/empresa2.png";
import empresa3 from "../../img/empresas/empresa3.png";
import empresa4 from "../../img/empresas/empresa4.png";
import empresa5 from "../../img/empresas/empresa5.png";
import { Carousel } from "react-bootstrap";

const Empresas = () => {
  let imagenesEmpresas = [
    empresa3,
    empresa2,
    empresa1,
    empresa5,
    empresa4,
    empresa1,
  ];

  return (
    <Fragment>
      {imagenesEmpresas.length > 0 ? (
        <div id="clase-empresas" className="pt-3 pb-2">
          <div className="d-flex justify-content-center">
            <p className="text-light">
              Las empresas tambien crecen con nosotros.
            </p>
            <a id="conoce-mas" className="ms-2">
              Conoce mas
            </a>
          </div>
         
         {/* dispositivos grandes */}
          <div className="seccion-carousel-empresas d-none d-md-block">
            <Carousel indicators={false}>
              {imagenesEmpresas.map((imagen, key) => {
                if (key % 5 === 0) {
                  return (
                    <Carousel.Item className="w-100 text-center item-carousel-empresas">
                      <div className="h-100 row">
                        <div className="h-100 d-flex justify-content-center">
                          {imagenesEmpresas[key] ? (
                            <div className="col-2 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                          {imagenesEmpresas[key+1] ? (
                            <div className="col-2 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key+1]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                          {imagenesEmpresas[key+2] ? (
                            <div className="col-2 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key+2]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                          {imagenesEmpresas[key+3] ? (
                            <div className="col-2 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key+3]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                          {imagenesEmpresas[key+4] ? (
                            <div className="col-2 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key+4]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                         
                        </div>
                      </div>
             
                    </Carousel.Item>
                  );
                }
              })}
            </Carousel>
          </div>

          {/* dispositivos chicos */}
          <div className="seccion-carousel-empresas d-inline d-md-none">
            <Carousel indicators={false}>
              {imagenesEmpresas.map((imagen, key) => {
                if (key % 3 === 0) {
                  return (
                    <Carousel.Item className="w-100 text-center item-carousel-empresas">
                      <div className="h-100 row">
                        <div className="h-100 d-flex justify-content-center">
                          {imagenesEmpresas[key] ? (
                            <div className="col-3 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                          {imagenesEmpresas[key+1] ? (
                            <div className="col-3 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key+1]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                          {imagenesEmpresas[key+2] ? (
                            <div className="col-3 h-100 d-flex justify-content-center">
                              <img
                                className="h-100"
                                src={imagenesEmpresas[key+2]}
                                alt="First slide"
                              />
                            </div>
                          ) : null}
                         
                        </div>
                      </div>
        
                    </Carousel.Item>
                  );
                }
              })}
            </Carousel>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Empresas;
