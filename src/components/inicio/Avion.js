import React, { Fragment } from "react";
import { iconos } from "../helpers/iconos";
import avion from "../../img/avion.png";
import mujer from "../../img/mujer.png";

const Avion = () => {
  return (
    <>
      {/* dispositivos grandes */}
      <div
        className="arial-rounded background-azul-mas-oscuro d-none d-md-block"
        style={{ fontSize: "2.6vw", padding: "1.6em 0" }}
      >
        <div
          style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
          className="p-5 row"
        >
          <div className="col-7">
            <div className="row" style={{ borderBottom: "solid 0.05em #fff" }}>
              <div className="col-1 text-light" style={{ fontSize: "0.6em" }}>
                {iconos.play}
              </div>
              <div className="col-11 text-light pb-2">
                <p style={{ fontSize: "0.8em" }} className=" m-0">
                  Facilitar el acceso al conocimiento
                </p>
                <p
                  style={{ fontSize: "0.8em" }}
                  className="colorsito-celeste m-0"
                >
                  tecnológico a distancia
                </p>
              </div>
            </div>
            <div
              className="text-light mt-2"
              style={{ fontFamily: "aventa", fontSize: "0.52em" }}
            >
              <p>
                A efectos de mejorar la capacidad de competir en el mundo
                globalizado, mediante el dominio de nuevas herramientas
              </p>
            </div>
          </div>
          <div className="col-1 text-light">
            <img
              src={avion}
              style={{ width: "110%", position: "relative", bottom: "1.4em" }}
            ></img>
          </div>
          <div className="col-4 text-light">
            <img
              src={mujer}
              style={{
                width: "17%",
                position: "absolute",
                top: "40vw",
                right: "10vw",
              }}
            ></img>
          </div>
        </div>
      </div>


      {/* dispositivos chicos */}
      <div
        className="arial-rounded background-azul-mas-oscuro d-block d-md-none py-4"
        style={{ fontSize: "3vw", padding: "1.6em 0" }}
      >
        <div
          style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
          className="py-3 px-0 row"
        >
          <div className="col-10">
            <div className="row">
              <div className=" col-1 mt-1 text-light" style={{ fontSize: "0.7em" }}>
                {iconos.play}
              </div>
              <div className="col-10 text-light pb-2">
                <p style={{ fontSize: "1.1em" }} className=" m-0">
                  Facilitar el acceso al conocimiento
                </p>
                <p
                  style={{ fontSize: "1.1em" }}
                  className="colorsito-celeste m-0"
                >
                  tecnológico a distancia
                </p>
              </div>
            </div>
          </div>

          <div className="col-2 text-light">
            <img
              src={mujer}
              style={{
                width: "22%",
                position: "absolute",
                top: "62vw",
                right: "8vw",
              }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avion;
