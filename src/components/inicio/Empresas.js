import React, { Fragment } from "react";
import { Row, Col } from "antd";
import empresa1 from "../../img/empresas/empresa1.png";
import empresa2 from "../../img/empresas/empresa2.png";
import empresa3 from "../../img/empresas/empresa3.png";
import empresa4 from "../../img/empresas/empresa4.png";
import empresa5 from "../../img/empresas/empresa5.png";
import { Carousel } from "react-bootstrap";

const Empresas = () => {
  let imagenesEmpresas = [empresa3, empresa2, empresa1, empresa5, empresa4];

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
          {window.innerWidth > 991 ? (
            <Row
              justify="space-around"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              {imagenesEmpresas.map((imagen, key) => {
                if (key < 5) {
                  return (
                    <Col span={4} classname="gutter-row">
                      <div className="d-flex justify-content-center align-items-center">
                        <img src={imagen}></img>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          ) : null}
          <div className="seccion-carousel-empresas">
            <Carousel indicators={false}>
              {imagenesEmpresas.map((imagen) => {
                return (
                  <Carousel.Item className="w-100 aspect-2-1 bg-primary text-center">
                    <div className="w-100 h-100 d-flex justify-content-center">
                      <div className="w-75 h-100 bg-secondary">
                        <img
                          className="w-100"
                          src={imagen}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Empresas;
