import React from "react";
import "./PublicidadHeader.css";
import { Row, Col } from "antd";
import { Button } from 'react-bootstrap';
import { urlServidor } from "../helpers/urlHelper";

const PublicidadHeader = ({ banner_header }) => {
  console.log(banner_header);
  return (
    <div id="fondo" className="text-light alto-banner">


      {/* dispositivos grandes */}
      <div className="d-none d-md-block h-100">
        <div className="row h-100 container-fluid">
          <div className="col-3 h-100  d-flex justify-content-center">

            <img
              src={`${urlServidor}/media/${banner_header.img_izq}`}
              alt={`${banner_header.img_izq_nombre}`}
              className=""
            ></img>

          </div>
          <div className="col-sm-6 col-md-5 h-100">
            <div
              className="d-flex h-100 flex-column justify-content-center align-items-center"
              style={{ "font-family": "arial-rounded" }}
            >

              <h4 id="titulo-publicidad" className="mt-2 text-center">
                {banner_header.texto_principal}
              </h4>

              {banner_header.texto_secundario !== "" ? (
                <p id="subtitulo-publicidad">{banner_header.texto_secundario}</p>
              ) : null}
            </div>
          </div>
          <div className="col-2 h-100">
            <div className="d-flex h-100 justify-content-center align-items-center">

              <Button
                variant={"info"}
                className="boton-celeste rounded-pill text-light"
              >
                {banner_header.texto_boton}
              </Button>
            </div>
          </div>
          <div className="col-sm-1 col-md-2 h-100 d-flex justify-content-center align-items-center">
            <img
              src={`${urlServidor}/media/${banner_header.img_der}`}
              alt={`${banner_header.img_der_nombre}`}
              className="h-75"
            ></img>
          </div>
        </div>
      </div>

      {/* dispositivos chicos */}
      <div className="d-inline d-md-none h-100">
        <div className="row h-100 container-fluid">
          <div className="col-3 h-100  d-flex justify-content-center">

            <img
              src={`${urlServidor}/media/${banner_header.img_izq}`}
              alt={`${banner_header.img_izq_nombre}`}
              className="h-100"
            ></img>

          </div>
          <div className="col-7 h-100">
            <div
              className="d-flex h-100 flex-column justify-content-center align-items-center"
              style={{ "font-family": "arial-rounded" }}
            >
              <h4 id="titulo-publicidad-mobile" className="mt-2 text-center">
                {banner_header.texto_principal}
              </h4>
            </div>
          </div>
          <div className="col-2 h-100">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <Button
                variant={"info"}
                className="boton-celeste rounded-pill text-light"
                style={{ "white-space": "nowrap", fontSize: "200%" }}
              >
                {banner_header.texto_boton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicidadHeader;
