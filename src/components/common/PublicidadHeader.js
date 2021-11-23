import React from "react";
import "./PublicidadHeader.css";
import { Row, Col } from "antd";

const PublicidadHeader = () => {
  let titulo = "¡Reparación de celulares / 4 módulos a $6.999";

  return (
    <div id="fondo" className="text-light">
      <Row className="h-100">
        <Col span={5}>1</Col>
        <Col span={10} className="h-100">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <h4 id="titulo-publicidad" className='mt-2'>{titulo}</h4>
          </div>
        </Col>
        <Col span={4} className="h-100">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <button className="boton-celeste px-4 pt-1 pb-2">Consultar aquí</button>
          </div>
        </Col>
        <Col span={5}>4</Col>
      </Row>
    </div>
  );
};

export default PublicidadHeader;
