import React, { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Row, Col } from "antd";
import imagenPrueba from "../../img/cursos/curso1.png";


const CursosYProgramas = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    "todas_las_categorias"
  );

  let categorias = [
    "todas_las_categorias",
    "tecnologia",
    "contable",
    "farmacia",
    "administrativo",
    "coaching",
  ];

  return (
    <div
      className="pt-3 pb-2 arial-rounded background-azul-oscuro"
      style={{ "font-size": "2.5vw" }}
    >
      <div style={{ "font-size": "100%" }}>
        <div className="d-flex justify-content-center">
          <p className="text-light">Conoce nuestros cursos y programas</p>
        </div>
      </div>

      {/* dispositivos grandes */}
      <div className="d-none d-md-block">
        <Carousel indicators={false}>
          <Carousel.Item interval={5000}>
            <Row justify="space-around">
              <Col span={5}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "60%" }}
                    >
                      Reparacion de celulares
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "50%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col span={5}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "60%" }}
                    >
                      Reparacion de celulares ejeplo titulo muy largho y este es
                      aun mas largo a ver que onda
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "50%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col span={5}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "60%" }}
                    >
                      Reparacion de celulares
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "50%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col span={5}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "60%" }}
                    >
                      Reparacion de celulares ejeplo titulo muy largho
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "50%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* dispositivos chicos */}
      <div className="d-block d-md-none">
      <Carousel indicators={false}>
          <Carousel.Item interval={5000}>
            <Row justify="space-around">
              <Col span={10}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "100%" }}
                    >
                      Reparacion de celulares
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "90%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col span={10}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "100%" }}
                    >
                      Reparacion de celulares ejeplo titulo muy largho y este es
                      aun mas largo a ver que onda
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "90%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
    
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row justify="space-around">
              <Col span={10}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "100%" }}
                    >
                      Reparacion de celulares
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "90%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col span={10}>
                <Card
                  className="p-0 h-100"
                  style={{ "background-color": "rgb(29, 33, 60)" }}
                >
                  <Card.Img variant="top" src={`${imagenPrueba}`} />
                  <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                    <Card.Title
                      className="text-light"
                      style={{ "font-size": "100%" }}
                    >
                      Reparacion de celulares ejeplo titulo muy largho
                    </Card.Title>
                    <div className=" m-0 p-0" style={{ "font-size": "90%" }}>
                      <div className="d-flex justify-content-between align-items-end mt-4">
                        <p className="colorsito-amarillo cursor-pointer">
                          Inscribite
                        </p>
                        <p className="colorsito-celeste cursor-pointer">
                          + Nivel: Inicial
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
};

export default CursosYProgramas;
