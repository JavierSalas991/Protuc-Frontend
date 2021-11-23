import React, {Fragment} from "react";
import { Row, Col } from "antd";
import empresa1 from "../../img/empresas/empresa1.png";
import empresa2 from "../../img/empresas/empresa2.png";
import empresa3 from "../../img/empresas/empresa3.png";
import empresa4 from "../../img/empresas/empresa4.png";
import empresa5 from "../../img/empresas/empresa5.png";

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
          <Row justify="space-around">
            {imagenesEmpresas.map((imagen, key) => {
              if (key < 5) {
                return (
                  <Col
                    className="d-flex justify-content-center align-items-center"
                    span={4}
                  >
                    <img src={imagen}></img>
                  </Col>
                );
              }
            })}
          </Row>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Empresas;
