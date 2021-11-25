import React from "react";
import imagenPrueba from "../../img/cursos/curso1.png";

const Novedades = () => {
  return (
    <div id="background-azul-oscuro" className="pt-3 pb-2">
      <div
        className="d-flex justify-content-center"
        style={{ "font-size": "41px" }}
      >
        <p className="text-light">Novedades</p>
      </div>
      <div
        style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
        className="row py-4"
      >
        <div className="col-sm-12 col-md-6 contenedor-novedades  d-flex flex-column justify-content-center align-items-center">
          <div className="cuadro-blanco">
            <div className="imagen-desplazada">
              <img src={imagenPrueba} className="w-100 h-100"></img>
            </div>
          </div>
          <div style={{ width: "85%" }}>
            <div className="cartel-nuevo">
              <p className="texto-nuevo colorsito-amarillo">NUEVO</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 bg-secondary">
          <div className="d-flex justify-content-around container">
            <p className="categoria-seleccionada cursor-pointer">Cursos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedades;
