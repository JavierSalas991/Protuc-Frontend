import React, { useState } from "react";
import Card from "react-bootstrap/Card";
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
    <div id="background-azul-oscuro" className="pt-3 pb-2">
      <div style={{'font-size': '34px'}}>
        <div className="d-flex justify-content-center">
          <p className="text-light">Conoce nuestros cursos y programas</p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around container">
          {categorias.map((categoria) => {
            if (categoriaSeleccionada === categoria) {
              return (
                <p className="categoria-seleccionada cursor-pointer">
                  {categoria
                    .replace("_", " ")
                    .replace("_", " ")
                    .replace(/\w\S*/g, (w) =>
                      w.replace(/^\w/, (c) => c.toUpperCase())
                    )}
                </p>
              );
            } else {
              return (
                <p
                  onClick={() => setCategoriaSeleccionada(categoria)}
                  className="categoria cursor-pointer"
                >
                  {categoria
                    .replace("_", " ")
                    .replace("_", " ")
                    .replace(/\w\S*/g, (w) =>
                      w.replace(/^\w/, (c) => c.toUpperCase())
                    )}
                </p>
              );
            }
          })}
        </div>
      </div>

      <div className="mt-3 mx-4">
        <Row justify="space-around">
          
          <Col span={5}>
            <Card
              className="p-0 h-100"
              style={{ "background-color": "rgb(29, 33, 60)" }}
            >
              <Card.Img variant="top" src={`${imagenPrueba}`} />
              <Card.Body className="pb-0  d-flex flex-column justify-content-between">
                <Card.Title className="text-light">
                  Reparacion de celulares
                </Card.Title>
                <div className=' m-0 p-0'>
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
                <Card.Title className="text-light">
                  Reparacion de celulares ejeplo titulo muy largho y este es aun mas largo a ver que onda
                </Card.Title>
                <div className=' m-0 p-0'>
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
                <Card.Title className="text-light">
                  Reparacion de celulares
                </Card.Title>
                <div className=' m-0 p-0'>
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
                <Card.Title className="text-light">
                  Reparacion de celulares ejeplo titulo muy largho
                </Card.Title>
                <div className=' m-0 p-0'>
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
      </div>
    </div>
  );
};

export default CursosYProgramas;
